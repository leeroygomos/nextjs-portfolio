import Layout from "../components/layout";
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function aboutme(){
    return (
        <Layout displayName="aboutme">
            <Head>
                <title>About Me</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Beginning my journey in 2016, I studied Computer Science at Simon Fraser University. Throughout my undergradute career, 
                    I took interest into many aspects of computing, specifically in web development, algorithms, and artificial intelligence.
                </p>
                <p>
                    I began my professional career at Traction on Demand in 2021, working with a multitude of different clients on
                    widely differing projects, from technical debt remediations to custom implementations. After the Traction on Demand acquisition in 2022,
                    I am currently working as a Technical Consultant and Developer at Salesforce.
                </p>
                <p>
                    Outside of work, I enjoy cooking, gaming, and working out.
                </p>
            </section>
        </Layout>
    );
}