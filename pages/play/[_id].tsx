import Board from "components/game/board";
import Game from "components/layout/App";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../utils/firebase";
import { getAuth } from "firebase/auth";
import PlayerClass from "game/models/Player";
import StartGame from "components/game/board/StartGame";

const Play: NextPage = () => {
  const { currentUser } = getAuth();
  const router = useRouter();
  const _id = router.query._id;
  const [loading, isLoading] = useState(true);
  const [gameLoading, isGameLoading] = useState(true);
  const [rumi, setRumi] = useState(null);

  const roomsRef = doc(db, "rooms", _id);

  useEffect(async () => {
    if (!_id) {
      return;
    }
    const unsubRoom = onSnapshot(roomsRef, (doc) => {
      setRumi(doc.data());
      isGameLoading(false);
    });
    if (rumi !== null) {
      if (rumi.active) {
        isLoading(false);
      }
    }
    return () => {
      unsubRoom();
    };
  }, [gameLoading, isLoading]);
  console.log(rumi);
  if (rumi !==null) {
    console.log(rumi)
    const playerExists = rumi.players.some(
      (user: { uid: any }) => user.uid == currentUser.uid
    );
    if (!playerExists) {
      getDocs(
        query(collection(db, "users"), where("uid", "==", currentUser.uid))
      ).then((res) => {
        res.forEach(async (fbDoc) => {
          const user = fbDoc.data();
          const roomUpdate = await updateDoc(roomsRef, {
            players: arrayUnion({
              ...new PlayerClass(user.id, user.username, user.avatar, user.uid),
            }),
          });
          const userUpdate = await updateDoc(doc(db, "users", user.id), {
            rooms: arrayUnion(rumi.id),
          });
        });
      });
    }
  }

  return (
    <>
      <Head>
        <title>Play | rumi.js</title>
        <meta name="description" content="rumi for the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game>
        {loading && (
          <section className="text-indigo-600 my-12 flex justify-center items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {!gameLoading && (
              <>
                <div className="flex items-center justify-center">
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
                  <h1>
                    Waiting for{" "}
                    {rumi.players.length == rumi.player_count
                      ? "host."
                      : "Players."}
                  </h1>
                </div>
                <p className="mt-4">
                  {rumi.players.length} / {rumi.player_count}
                </p>
                <div>
                  {rumi.host === currentUser.uid && (
                    <StartGame
                      game={rumi}
                      setRumi={setRumi}
                      isLoading={isLoading}
                    />
                  )}
                </div>
              </>
            )}
          </section>
        )}
        {!loading && <Board game={rumi} setRumi={setRumi} user={currentUser} />}
      </Game>
    </>
  );
};

export default Play;
