import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import { siteTitle } from './constants';
import Header from './header';

export default function Layout({ children, page }) {

  return (
    <>
      <div className={(page == null || page == '') ? styles.layoutHome : styles.layout}>
        <Head className={styles.container}>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
          <meta name="author" content="Lee Roy Gomos"/>
          <meta name="description" content="Lee Roy Gomos Portfolio"/>
          <meta name="keywords" content="Lee Roy Gomos Portfolio Software Developer Programmer"/>
          <title>{siteTitle}</title>
        </Head>
        <Header home={(page == null || page == '') ? 'home' : "" }></Header>
        <main className={(page == null || page == '')? styles.container : styles.containerChild}>
          {children}
        </main>
      </div>
    </>
  );
}