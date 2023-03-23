import Layout from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import {IconGithub, IconLinkedin} from '../components/utils';

export default function Home() {
  return (
      <Layout home>
          <section className={utilStyles.headingMd}>
            <p>
              Hello, my name is Lee Roy and I am a Technical Consultant and Developer at Salesforce.
            </p>
          </section>
          <section>
            <div className={utilStyles.gridContainer}>
                <Link href="https://github.com/leeroygomos" target="_blank"><IconGithub></IconGithub></Link>
                <Link href="https://www.linkedin.com/in/lee-roy-gomos-6077b1125/" target="_blank"><IconLinkedin></IconLinkedin></Link>
            </div>
          </section>
      </Layout>
  );
}