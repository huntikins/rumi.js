//create game start
import deck from "./cards.js";
import { shuffle, merge, deckCount, dealCards, cardCount } from "./deck.js";

function newGame(playerCount) {
  //determine how many decks based on playerCount
  const cards = merge(deck, deckCount(playerCount));
  return cards;
}

function gameStart(cards, playerCount) {
  shuffle(cards);
  let round = 1;
  let numberOfCards = cardCount(round);
  const playerHands = dealCards(cards, playerCount, numberOfCards);
  return playerHands;
}

export { newGame, gameStart };
