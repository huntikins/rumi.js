//shuffle elements based on Fisher-Yates shuffle method
function shuffle(array) {
  var m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
  //shuffling created using the fisher-yates shuffle method https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
}

//merges multiple decks together based on player count
function merge(array, count) {
  let mergedDeck = [];
  for (let i = 0; i < count; i++) {
    mergedDeck.push.apply(mergedDeck, array);
  }
  return mergedDeck;
}


//deals cards out to playerCount
function dealCards(cards, playerCount, cardCount, players) {
  let playerHands = [];
  //determine player count
  for (let p = 0; p < playerCount; p++) {
    let playerObj = {
      name: players[p],
      hand: [],
      score: 0,
      turn: false
    };
    for (let i = 0; i < cardCount; i++) {
      playerObj.hand.push(cards[i]);
      cards.shift();
    }
    playerHands.push(playerObj);
  }
  return playerHands;
}

export { shuffle, merge, dealCards };
