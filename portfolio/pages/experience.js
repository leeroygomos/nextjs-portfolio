import Layout from "../components/layout";
import Head from 'next/head';
import CustomizedTimeline from "../components/timeline";
import { experienceItems } from "../components/constants";

export default function experience(){
    return (
        <Layout>
            <Head>
                <title>Experience</title>
            </Head>
            <CustomizedTimeline items={experienceItems}></CustomizedTimeline>
        </Layout>
    );
}