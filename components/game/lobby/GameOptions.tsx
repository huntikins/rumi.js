import A11yDialog from "a11y-dialog";
import RumiInstance from "game/models/RumiInstance";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "context/AuthContext";
import { collection, addDoc, query, where, getDocs, updateDoc, doc as fbDoc, arrayUnion  } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import {useRouter} from "next/router";
import PlayerClass from "game/models/Player";

function GameOptions() {

  const router = useRouter()

  const { currentUser } = useContext(AuthContext);

  const defaultUsername = currentUser.email.substring(
    0,
    currentUser.email.lastIndexOf("@")
  );

  const gameOptions = useRef(null);

  let gameOptionsDialog: A11yDialog | undefined = undefined;

  useEffect(() => {
    if (null !== gameOptions.current) {
      gameOptionsDialog = new A11yDialog(gameOptions.current);
      gameOptionsDialog.show();
    }
  });

  async function createRoom(e: any) {
    e.preventDefault();
    gameOptionsDialog.hide();

    const host = {
      id: currentUser.uid,
      username: currentUser.displayName
        ? currentUser.displayName
        : defaultUsername,
      icon: `https://avatars.dicebear.com/api/adventurer-neutral/${currentUser.uid}.svg`,
    };

    const { roomName, player_count } = e.target.elements;

    const room = roomName.value !== null ? roomName.value : "New Game";

    const playerCount = player_count.value !== null ? player_count.value : 4;

    const rumi = new RumiInstance(playerCount, room, host);

      try {
        const doc = query(collection(db, "users"), where("uid", "==", currentUser.uid));
        const querySnapshot = await getDocs(doc);
        querySnapshot.forEach(async (doc) => {
          // doc.data() is never undefined for query doc snapshots
          const player = doc.data();
          rumi.players.push({...new PlayerClass(player.id, player.username, player.avatar, player.uid)})
          try {
            const roomsDoc = await addDoc(collection(db, "rooms"), {...rumi})
            const update = await updateDoc(fbDoc(db, "rooms", roomsDoc.id), { id: roomsDoc.id})
            const userUpdate = await updateDoc(fbDoc(db, "users", player.id), {
              rooms: arrayUnion(roomsDoc.id)
            })
            router.push(`/play/${roomsDoc.id}`)
          } catch {
            console.error("Error adding document",{...rumi} );
          }
        });
      } catch (e) {
        console.error("Error finding user: ", e);
      }
  }

  return (
    <div
      ref={gameOptions}
      id="gameOptions"
      aria-labelledby="gameOptions-title"
      aria-hidden="true"
      className="dialog-container"
    >
      <div data-a11y-dialog-hide className="dialog-overlay"></div>
      <div role="document" className="dialog-content">
        <span id="gameOptions-title" className="sr-only">
          Your dialog title
        </span>
        <div className="dialog-content__main center-modal">
          <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white">
            <h3 className="text-center text-4xl py-2">Game Settings</h3>
            <form onSubmit={createRoom}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="roomName"
                >
                  Room Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="roomName"
                  id="roomName"
                  type="text"
                  placeholder="my favorite game"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="player_count"
                >
                  Number of Players
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="player_count"
                  id="player_count"
                  type="number"
                  min="2"
                />
              </div>
              <button
                className="transition-all duration-500 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
                type="submit"
              >
                Start Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameOptions;
