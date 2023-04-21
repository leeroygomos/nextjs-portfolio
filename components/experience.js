import Head from 'next/head';
import CustomizedTimeline from "./timeline";
import { experienceItems } from "./constants";

export default function experience(){
    return (
        <>
        <Head>
            <title>Experience</title>
        </Head>
        <CustomizedTimeline items={experienceItems}></CustomizedTimeline>
        </>
    );
}