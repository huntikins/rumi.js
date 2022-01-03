import { shuffle, deal } from ".";

export default function turnStart(rumi: any, stateChanger: any) {
  const rumiProxy = rumi;

  rumiProxy.cards = shuffle(rumiProxy.cards);

  const { hands, liveDeck } = deal(
    rumiProxy.goal.cardCount,
    rumiProxy.players,
    rumiProxy.cards
  );

  rumiProxy.players.forEach(
    (player: any, index: any) => {
      player.hand = hands[index];
    }
  );


  stateChanger((prevValue: any) => {
    return { ...prevValue, cards: rumiProxy.cards, players: rumiProxy.players };
  });
  console.log(hands);
  console.log(liveDeck);
  console.log(rumiProxy);
}
