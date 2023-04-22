import Head from 'next/head';
import Card from "./card";
import utilStyles from '../styles/utils.module.css';
import { projectItems } from "./constants";

export default function projects(){
    return (
        <>
        <Head>
            <title>Projects</title>
        </Head>
        <div className={utilStyles.gridContainer}>
            {projectItems.map((item) => 
                    <Card 
                        title={item.title} 
                        link={item.link}
                        description={item.description}
                        github={item.github} 
                        img={item.img}
                        width={400}>
                    </Card>
            )}
        </div>
        </>
    );
}