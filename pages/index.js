import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <>
      <Layout home="true">
        <p className={utilStyles.headingMd}>
          Hello, my name is Lee Roy and I am a Technical Consultant and Developer at Salesforce.
        </p>
      </Layout>
    </>
  );
}