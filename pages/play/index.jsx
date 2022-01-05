import { updateCurrentUser } from "@firebase/auth";
import RumiInstance from "game/models/RumiInstance";
import { AuthContext } from "context/AuthContext";
import Head from "next/head";
import { useEffect, useContext } from "react";
import GameOptions from '../../components/game/lobby/GameOptions';

import Game from "../../components/layout/Game";

const Play = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Play | rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game>
        <section className="text-indigo-600 my-12 flex justify-center items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center items-center">
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
            <span>Creating Room...</span>
          </div>
        </section>
        <GameOptions />
      </Game>
    </>
  );
};

export default Play;
