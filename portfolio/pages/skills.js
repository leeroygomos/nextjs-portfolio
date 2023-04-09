import Layout from "../components/layout";
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function skills(){
    return (
        <Layout displayName="skills">
            <Head>
                <title>Skills</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                TODO
                </p>
            </section>
        </Layout>
    );
}