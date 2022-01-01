import A11yDialog from "a11y-dialog";
import RumiInstance from "game/models/RumiInstance";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "context/AuthContext";
import router from "next/router";

function GameOptions() {
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

  function createRoom(e: any) {
    e.preventDefault();
    gameOptionsDialog.hide();

    const host = {
      id: currentUser.uid,
      username: currentUser.displayName
        ? currentUser.displayName
        : defaultUsername,
      icon: `https://avatars.dicebear.com/api/adventurer-neutral/${currentUser.uid}.svg`,
    };

    const { roomName } = e.target.elements;

    const room = roomName.value !== null ? roomName.value : "New Game";

    const rumi = new RumiInstance(room, host);

    const body = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(rumi),
    };

    fetch("/api/rooms", body)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.text();
      })
      .then((data) => {
          setTimeout(()=>router.push(`/play/${data}`), 1000)
      })
      .catch((error) => {
        throw error;
      });
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
