import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function aboutme(){
    return (
        <>
        <Head>
            <title>About Me</title>
        </Head>
        <div className={utilStyles.gridContainer}>
            <Image
                src='/images/think.jpg'
                alt='Lee Roy'
                width={400}
                height={500}
            />
        </div>
        <section className={utilStyles.headingMd}>
            <p>
                Beginning my journey in 2016, I studied Computer Science at Simon Fraser University. Throughout my undergradute career, 
                I took interest into many aspects of computing, specifically in web development, algorithms, and artificial intelligence.
            </p>
            <p>
                I began my professional career at Traction on Demand in 2021, working with a multitude of different clients on
                widely differing projects, from technical debt remediations to custom implementations. After the Traction on Demand acquisition in 2022,
                I worked as a Technical Consultant at Salesforce.
            </p>
            <p>
                I am always looking to expand my knowledge and learn new things such as this website, which I rebuilt from scratch in order to learn React with Next.js. 
                I am currently open to all software development opportunies not limited to Salesforce development. 
            </p>
        </section>

        </>
    );
}