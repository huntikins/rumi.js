import { doc, updateDoc } from "firebase/firestore";
import { db } from "utils/firebase";
import { shuffle, deal } from ".";

export async function turnStart(rumi: any, stateChanger: any) {
  const rumiProxy = rumi;
  const { hands, liveDeck } = deal(
    rumiProxy.goal.cardCount,
    rumiProxy.players,
    rumiProxy.cards
  );

  rumiProxy.players.forEach((player: any, index: any) => {
    player.hand = hands[index];
  });

  stateChanger((prevValue: any) => {
    return { ...prevValue, cards: rumiProxy.cards, players: rumiProxy.players };
  });

  const roomsRef = doc(db, "rooms", rumi.id);

  await updateDoc(roomsRef, {
    cards: rumiProxy.cards,
    players: rumiProxy.players,
  });
}

export function drawCard(rumi: any, stateChanger: any) {
  const rumiProxy = rumi;
  const playerIndex = getPlayerIndex(rumi);
  if (!rumiProxy.players[playerIndex].discardNeeded) {
    const drawnCard = rumiProxy.cards.shift();
    const playerProxy = rumiProxy.players[playerIndex];
    playerProxy.hand.push(drawnCard);
    playerProxy.discardNeeded = true;
    rumiProxy.players.splice(playerIndex, 1, playerProxy);
    rumiProxy.currentPlayer.discardNeeded = true;
    stateChanger((prevValue: any) => {
      return {
        ...prevValue,
        cards: rumiProxy.cards,
        players: rumiProxy.players,
      };
    });
  } else {
    return false;
  }
}

export function getPlayerIndex(rumi: {
  players: { id: any }[];
  currentPlayer: { player_id: any };
}) {
  return rumi.players.findIndex(
    (x: { id: any }) => x.id === rumi.currentPlayer.player_id
  );
}
