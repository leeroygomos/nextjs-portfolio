import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {IconGithub, IconLinkedin} from '../components/utils';
import { name } from '../components/constants';
import { motion } from "framer-motion";

export default function Header({home}) {
  return (
    <>
      {/* {home && (<p>TEST</p>)} */}
      <motion.div
          initial={{ x: "50vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          exit={{ x: "-50vh", opacity: 0 }}
          transition={{
            type: "tween",
            stiffness: 260,
            damping: 20
          }}
        >
        <header className={home ? utilStyles.headerHome : utilStyles.header}>
          <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
          <h1 className={utilStyles.heading}>{name}</h1>
          <div className={utilStyles.gridContainer}>
              <Link href="https://github.com/leeroygomos" target="_blank"><IconGithub></IconGithub></Link>
              <Link href="https://www.linkedin.com/in/lee-roy-gomos-6077b1125/" target="_blank"><IconLinkedin></IconLinkedin></Link>
          </div>
        </header>
      </motion.div>
    </>
  );
}