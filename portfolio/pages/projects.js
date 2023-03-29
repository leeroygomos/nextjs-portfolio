import Layout from "../components/layout";
import Head from 'next/head';
import Card from "../components/card";
import utilStyles from '../styles/utils.module.css';
import { projectItems } from "../components/constants";

export default function projects(){
    return (
        <Layout className={utilStyles.test}>
            <Head>
                <title>Projects</title>
            </Head>
            <div className={utilStyles.gridContainer}>
                {projectItems.map((item) => 
                        <Card 
                            title={item.title} 
                            description={item.description}
                            github={item.github} 
                            img={item.img}>
                        </Card>
                )}
            </div>
        </Layout>
    );
}