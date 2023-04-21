import Layout from '../components/layout';
import { AnimatePresence, motion } from "framer-motion";
import Landing from '../components/home';
import Aboutme from '../components/aboutme';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Directory from '../components/directory';
import { useState } from 'react';
import { navItems } from '../components/constants';

function renderPage(page) {
  switch(page){
    case 'aboutme':
      return (<Aboutme></Aboutme>);
    case 'experience':
      return (<Experience></Experience>);
    case 'projects':
      return (<Projects></Projects>);
    case 'skills':
      return (<Skills></Skills>);
    default:
      return (<Landing></Landing>);
  }
}

export default function Home() {

  const [data, setData] = useState('');
  const updatePage = (page) =>{
    setData(page);
  }

  return (
    <>
      <Directory items={navItems} data={updatePage}></Directory>
      <Layout page={data}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
              key={data}
              initial={{ x: "50vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              exit={{ x: "-50vw", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40
              }}
            >
              {renderPage(data)}
            </motion.div>
          </AnimatePresence>
      </Layout>
    </>
  );
}