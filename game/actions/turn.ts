import { shuffle, deal } from ".";

export function turnStart(rumi: any, stateChanger: any) {
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


export function drawCard(rumi: any, stateChanger: any){
  const rumiProxy = rumi;
  const playerIndex = getPlayerIndex(rumi)
  if(!rumiProxy.players[playerIndex].discardNeeded){
    const drawnCard = rumiProxy.cards.shift()
    const playerProxy = rumiProxy.players[playerIndex]
    playerProxy.hand.push(drawnCard)
    playerProxy.discardNeeded = true;
    rumiProxy.players.splice(playerIndex, 1, playerProxy)
    rumiProxy.currentPlayer.discardNeeded = true
    stateChanger((prevValue: any) => {
      return { ...prevValue, cards: rumiProxy.cards, players: rumiProxy.players };
    });
  } else {
    return false;
  }
}

export function discardCard(rumi, setState){
  console.log('discard')
}

export function getPlayerIndex(rumi: { players: { id: any; }[]; currentPlayer: { player_id: any; }; }){
  return rumi.players.findIndex((x: { id: any; }) => x.id === rumi.currentPlayer.player_id)
}