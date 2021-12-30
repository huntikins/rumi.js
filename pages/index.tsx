import Main from 'components/layout/Main';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Home: NextPage = () => {

  return (
    <Fragment>
      <Head>
        <title>rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </Fragment>
  )
}

export default Home

