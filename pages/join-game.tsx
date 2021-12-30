import App from 'components/layout/App';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react';
import { io, Socket } from "socket.io-client";

const JoinGame: NextPage = () => {
  const socket: Socket = io();

  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  return (
    <Fragment>
      <Head>
        <title>Join Game | rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App>
        <h1>Join Game</h1>
      </App>
    </Fragment>
  )
}

export default JoinGame
