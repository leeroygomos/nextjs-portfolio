import Head from 'next/head';
import Card from "./card";
import { certifications } from "./constants";
import utilStyles from '../styles/utils.module.css';

export default function skills(){
    return (
        <>
        <Head>
            <title>Skills</title>
        </Head>
        <section className={utilStyles.headingMd}>
        <h2>Skills</h2>
            <p>
            TODO
            </p>
        </section>
        <section>
            <h2>Certifications</h2>
            <div className={utilStyles.gridContainer}>
                {certifications.map((item) => 
                        <Card 
                            title={item.name} 
                            description={item.date}
                            img={item.img}
                            width={250}
                            >
                        </Card>
                )}
            </div>
        </section>
        </>
    );
}