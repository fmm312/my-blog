import Head from "next/head";
import Switch from "react-switch";
import Link from "next/link";

import styles from '././../styles/app.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <div className={styles.avatar} />

          <div>
            <p>Blog pessoal do
              <Link href="/" >
                <a className={styles.link} style={{ position: 'relative', right: 5 }}>
                  <b>Felipe Menezes.</b>
                </a>
              </Link>
            </p>
            <p>Escrevo sobre programação.</p>
          </div>
        </div>

        {/* <Switch  /> */}
      </header>

      <main className={styles.feed}>
        <Component {...pageProps} />
      </main>

      {/* <footer className={styles.footer}>
        <Link href="/">
          <a className={styles.link}>
            linkedin
          </a>
        </Link> •

        <Link href="/">
          <a className={styles.link}>
            github
          </a>
        </Link> •

        <Link href="/">
          <a className={styles.link}>
            site
          </a>
        </Link>
      </footer> */}
    </>
  );
}

export default MyApp;
