import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import { siteTitle, navItems } from '../components/constants';
import Directory from '../components/directory';
import { motion } from "framer-motion";
import Header from './header';
import { useState } from 'react';

export default function Layout({ children, home }) {

  return (
    <>
    <Directory items={navItems}></Directory>
      <div className={home ? styles.layoutHome : styles.layout}>
        <Head className={styles.container}>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="author" content="Lee Roy Gomos"/>
          <meta name="description" content="Lee Roy Gomos Portfolio"/>
          <meta name="keywords" content="Lee Roy Gomos Portfolio Software Developer Programmer"/>
          <title>{siteTitle}</title>
        </Head>
        <Header home={home ? home : "" }></Header>
        <motion.div
          initial={{ x: "50vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          exit={{ x: "-50vh", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5
          }}
        >
        <main className={home ? styles.container : styles.containerChild}>{children}</main>
        </motion.div>
      </div>
    </>
  );
}