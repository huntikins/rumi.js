import Main from 'components/layout/Main';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react';
import { io, Socket } from "socket.io-client";

const Home: NextPage = () => {
  const socket: Socket = io();

  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

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
