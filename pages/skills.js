import Layout from "../components/layout";
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Particles from "../components/particles";

export default function skills(){
    return (
        <>
        <Particles></Particles>
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
        </>
    );
}