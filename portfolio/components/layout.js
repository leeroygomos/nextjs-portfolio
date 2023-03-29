import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { siteTitle, navItems } from '../components/constants';
import Directory from '../components/directory';
import { motion } from "framer-motion";
import Header from './header';

export default function Layout({ children, home }) {
  return (
    <>
    <Directory items={navItems}></Directory>
      <div className={home ? styles.layoutHome : styles.layout}>
        <Head className={styles.container}>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="Lee Roy is Me"
            content="Its me Lee Roy"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
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
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
        </motion.div>
      </div>
    </>
  );
}