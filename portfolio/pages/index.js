import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { navItems, siteTitle } from '../components/constants';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Lee Roy and I am a Technical Consultant and Developer at Salesforce.
        </p>
      </section>
    </Layout>
  );
}