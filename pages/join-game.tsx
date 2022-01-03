import GameCard from "components/card/GameCard";
import App from "components/layout/App";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { db } from "utils/firebase";

const JoinGame: NextPage = () => {
  const [loading, isLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(async () => {
    const q = query(collection(db, "rooms"), where("active", "==", false))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setGames((games) => [...games, doc.data()]);
      isLoading(false);
    });
    
    return () => {
      querySnapshot;
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Join Game | rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App>
        <section>
          <h1 className="text-center text-4xl my-4">Choose a Lobby</h1>
          <div className="flex flex-wrap">
            {loading && (
              <section className="my-12 flex justify-center items-center">
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
                  <span>Loading...</span>
                </div>
              </section>
            )}
            {!loading && games.map((game, index)=>{
              return(
                <GameCard game={game} key={index+game.game_name} />
              )
            })}
          </div>
        </section>
      </App>
    </Fragment>
  );
};

export default JoinGame;
