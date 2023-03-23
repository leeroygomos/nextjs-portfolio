import Layout from "../components/layout";
import Head from 'next/head';

export default function aboutme(){
    return (
        <Layout displayName="aboutme">
            <Head>
                <title>About Me</title>
            </Head>
            <p>Ayo</p>
        </Layout>
    );
}