import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import { siteTitle, navItems } from './constants';
import Directory from './directory';
import { AnimatePresence, motion } from "framer-motion";
import Header from './header';
import Particles from "../components/particles";
import { useState } from 'react';
import Landing from './home';
import Aboutme from './aboutme';
import Experience from './experience';
import Projects from './projects';
import Skills from './skills';

function renderPage(page) {
  switch(page){
    case 'aboutme':
      return (<Aboutme></Aboutme>);
    case 'experience':
      return (<Experience></Experience>);
    case 'projects':
      return (<Projects></Projects>);
    case 'skills':
      return (<Skills></Skills>);
    default:
      return (<Landing></Landing>);
  }
}

export default function Layout({ children, home }) {
  const [data, setData] = useState('');
  const updatePage = (page) =>{
    setData(page);
  }

  return (
    <>
    <Particles></Particles>
    <Directory items={navItems} data={updatePage}></Directory>
      <div className={(data == null || data == '') ? styles.layoutHome : styles.layout}>
        <Head className={styles.container}>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
          <meta name="author" content="Lee Roy Gomos"/>
          <meta name="description" content="Lee Roy Gomos Portfolio"/>
          <meta name="keywords" content="Lee Roy Gomos Portfolio Software Developer Programmer"/>
          <title>{siteTitle}</title>
        </Head>
        <Header home={(data == null || data == '') ? home : "" }></Header>
        <main className={(data == null || data == '')? styles.container : styles.containerChild}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={data}
                initial={{ x: "50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                exit={{ x: "-50vw", opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40
                }}
              >
                {renderPage(data)}
              </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}