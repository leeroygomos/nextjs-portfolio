import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {IconGithub, IconLinkedin} from '../components/utils';
import { name } from '../components/constants';

export default function Header({home}) {
  return (
    <>
        <header className={home ? utilStyles.headerHome : utilStyles.header}>
          <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt=""
            />
          <h1 className={utilStyles.heading}>{name}</h1>
          <div className={utilStyles.gridContainer}>
              <Link href="https://github.com/leeroygomos" target="_blank"><IconGithub></IconGithub></Link>
              <Link href="https://www.linkedin.com/in/lee-roy-gomos-6077b1125/" target="_blank"><IconLinkedin></IconLinkedin></Link>
          </div>
          {home ? <p className={utilStyles.headingMd}>
            Hello, my name is Lee Roy and I am a former Technical Consultant and Developer at Salesforce.
          </p> : <></>
          }

        </header>

    </>
  );
}