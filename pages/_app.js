import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'; 
import { BiWorld } from 'react-icons/bi';
import Switch from "react-switch";
import Link from "next/link";

import styles from '././../styles/app.module.css';

function MyApp({ Component, pageProps }) {
  function goToSocialChannel(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <Head>
        <title>Meu blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <p><span>console</span>.log( )</p>
        </Link>

        <div>
          <AiFillGithub 
            className={styles.socialIcon}
            onClick={() => goToSocialChannel('https://github.com/fmm312')}
          />
          <BiWorld
            onClick={() => goToSocialChannel('https://felipedeveloper.vercel.app/')}
            className={styles.socialIcon} 
          />
          <AiFillLinkedin
            onClick={() => goToSocialChannel('https://www.linkedin.com/in/felipemenezesmagalhaes/')}
            className={styles.socialIcon} 
          />

          {/* <Switch  /> */}
        </div>
      </header>

      <div className={styles.subheader}>
        <div>
          <div className={styles.avatar} />

          <div>
            <p>Blog pessoal do
              <a 
                className={styles.link} 
                style={{ position: 'relative', right: 5, cursor: 'pointer' }}
                onClick={() => goToSocialChannel('https://www.linkedin.com/in/felipemenezesmagalhaes/')}
              >
                <b>Felipe Menezes.</b>
              </a>
            </p>
            <p>Escrevo sobre programação.</p>
          </div>
        </div>        
      </div>

      <main className={styles.feed}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
