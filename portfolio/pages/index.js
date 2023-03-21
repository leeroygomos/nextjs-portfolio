import Head from 'next/head';
import Layout from '../components/layout';
import Directory from '../components/directory';
import utilStyles from '../styles/utils.module.css';
import { navItems, siteTitle } from '../components/constants';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Lee Roy and I am a Technical Consultant and Developer at Salesforce.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <Directory items={navItems}></Directory>
      </section>
    </Layout>
  );
}