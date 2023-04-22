import Layout from '../components/layout';
import { AnimatePresence, motion } from "framer-motion";
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
  }
}

export default function Home() {

  const [data, setData] = useState();
  const [home, setHome] = useState();
  const updatePage = (page) =>{
    setData(page);
    page ? setHome(true) : setHome(false);
  }

  return (
    <>
    <Directory items={navItems} data={updatePage}></Directory>
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={home}
        initial={{opacity: 0 }}
        animate={{opacity: 1}}
        exit={{opacity: 0 }}
      >
        {!data ? <Layout page={data}></Layout>
        : 
        <>
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
        }
      </motion.div>
    </AnimatePresence>
    </>
  );
}
