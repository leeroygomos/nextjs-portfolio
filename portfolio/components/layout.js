import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { name, siteTitle, navItems } from '../components/constants';
import Directory from '../components/directory';

export default function Layout({ children, home }) {
  return (
    <div className={utilStyles.layout}>
      <Directory items={navItems}></Directory>
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
      <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
      </header>
      <main className={home? styles.container : styles.containerChild}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}