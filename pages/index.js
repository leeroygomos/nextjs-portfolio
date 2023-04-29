import Layout from '../components/layout';
import { AnimatePresence, motion } from "framer-motion";
import Aboutme from '../components/aboutme';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Directory from '../components/directory';
import { useState, useEffect } from 'react';
import { navItems } from '../components/constants';
import utilStyles from '../styles/utils.module.css';
import Joke from '../components/joke';

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
  const [setup, setSetup] = useState();
  const [delivery, setDelivery] = useState();

  const updatePage = (page) =>{
    setData(page);
    page ? setHome(true) : setHome(false);
  }

  const getJoke = async () => {
    fetch("https://v2.jokeapi.dev/joke/Programming")
        .then(res => res.json())
        .then(data => {setSetup(data.setup); setDelivery(data.delivery);});
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
    <div class={utilStyles.everything}>
      <Directory items={navItems} data={updatePage}></Directory>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={home}
          initial={{opacity: 0 }}
          animate={{opacity: 1}}
          exit={{opacity: 0 }}
        >
          {!data? <Layout page={data}><Joke setup={setup} delivery={delivery} getJoke={getJoke}/></Layout>
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
    </div>
    </>
  );
}
