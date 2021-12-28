import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../assets/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World
        </h1>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Card Generation &rarr;</h2>
            <code>/api/deck</code>
            <br/>
            <br/>
            <code>body: {`{
              "count": player_count
            }`}</code>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
