import { doc, updateDoc } from "firebase/firestore";
import { shuffle, turnStart } from "game/actions";
import GameDeck from "game/models/GameDeck";
import { useState } from "react";
import { db } from "utils/firebase";

function StartGame({ game, setRumi, isLoading }) {
  const playersShuffled = shuffle(game.players);

  const [stateLoading, setStateLoading] = useState(true)

  async function handleGameStart() {
    const deck = new GameDeck(game.players.length);
    deck.genCards()
    setRumi((prevState: any) => {
      return {
        ...prevState,
        cards: [...deck.cards],
        round: 1,
        active: true,
        currentPlayer: getCurrentPlayer(),
        players: playersShuffled,
      };
    }, () => {
      setStateLoading(false)
  });
    const roomsRef = doc(db, "rooms", game.id);

    await updateDoc(roomsRef, {
      cards: [...deck.cards],
      round: 1,
      active: true,
      currentPlayer: getCurrentPlayer(),
      players: playersShuffled,
    });

    isLoading(false);
    if(!stateLoading){
      turnStart(game, setRumi)
    }
  }

  function getCurrentPlayer() {

    return {
      discardNeeded: false,
      isBuying: false,
      player_id: playersShuffled[0].id,
    };
  }

  return (
    <button
      onClick={handleGameStart}
      type="button"
      className="text-center transition-all border-2 border-indigo-600 bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-12 text-white my-6"
    >
      Start Game
    </button>
  );
}

export default StartGame;
