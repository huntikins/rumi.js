import Board from "components/game/board";
import Game from "components/layout/App";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { domain } from '../../utils/url';

const Play: NextPage = ({gameInstance}) => {

const [loading, isLoading] = useState(true)
const [rumi, setRumi] = useState({})

useEffect(() => {
  setRumi(gameInstance)
  isLoading(false)
})

console.log(rumi)

  return (
    <>
      <Head>
        <title>Play | rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game>
        {
         loading && (<section className="my-12 flex justify-center items-center">
          <div className="flex justify-center items-center text-indigo-600">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Loading {gameInstance.game_name}</span>
          </div>
        </section>)
        }
        {!loading && (<Board game={rumi}/>)}
      </Game>
    </>
  );
};

export async function getServerSideProps(context: { params: { _id: any; }; }) {
  const _id = context.params._id

  const res = await fetch(`${domain}/api/rooms/` + _id)
  const gameInstance = await res.json()

  if (!gameInstance) {
    return {
      notFound: true,
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { gameInstance }, // will be passed to the page component as props
  }
}

export default Play;
