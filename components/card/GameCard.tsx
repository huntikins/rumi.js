import A11yDialog from "a11y-dialog";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";

function GameCard({ game }) {
  const router = useRouter();

  const [dialog, setDialog] = useState();

  const joinRoom = useRef();

  function handleRoomJoin() {
      router.push(`/play/${game.id}`)
  }

  useEffect(() => {
    if (null !== joinRoom.current) {
      setDialog(new A11yDialog(joinRoom.current));
    }
    return {
      dialog,
    };
  }, []);

  return (
    <>
      <article
        onClick={() => {
          dialog.show();
        }}
        className="room bg-indigo-300 rounded-xl shadow-md p-3 m-2 flex justify-start items-center hover:cursor-pointer"
      >
        <div className="flex justify-center items-center">
          <Image
            className="rounded-xl"
            src={game.host_icon}
            height="50"
            width="50"
            loading="eager"
            blurDataURL={game.host_icon}
            placeholder="blur"
          />
        </div>
        <div className="room-data ml-4 p-1">
          <div className="room-data_title">
            <h3>{game.name_name}</h3>
            <h4>Host: {game.host_name}</h4>
          </div>
          <div className="room-data_info">
            Players: {game.players.length} / {game.player_count}
          </div>
        </div>
      </article>
      <div
        ref={joinRoom}
        id="confirm-join"
        aria-labelledby="confirm-join-title"
        aria-hidden="true"
        className="dialog-container"
      >
        <div data-a11y-dialog-hide className="dialog-overlay"></div>
        <div role="document" className="dialog-content bg-white">
          <div className="dialog-close">
            <button
              type="button"
              data-a11y-dialog-hide
              aria-label="Close dialog"
            >
              &times;
            </button>
          </div>
          <span id="confirm-join-title" className="sr-only">
            Confirm Join
          </span>
          <div className="dialog-content__main">
            <h2 className="text-center">Are you sure?</h2>
            <div>
              <button
                onClick={handleRoomJoin}
                className="w-full text-center block transition-all border-2 border-indigo-600 bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-4 text-white my-2"
              >
                Yes
              </button>
              <button
                type="button"
                data-a11y-dialog-hide
                className="w-full text-center block transition-all border-2 border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white py-2 px-4 text-indigo-600 my-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCard;
