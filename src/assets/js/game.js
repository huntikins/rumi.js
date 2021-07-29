//imports
import deck from "./cards.js";
import { shuffle, merge, deckCount, dealCards } from "./deck.js";
import { players } from "./player.js";

// Round Logic
//Round constructor for ease of editing & future additions?
function Round(order, sets, runs, cardCount, discard) {
  this.round = order;
  this.sets = sets;
  this.runs = runs;
  this.cardCount = cardCount;
  this.discard = discard;
}
//create rounds
const round1 = new Round(1, 2, 0, 10, true);
const round2 = new Round(2, 1, 1, 10, true);
const round3 = new Round(3, 0, 2, 10, true);
const round4 = new Round(4, 3, 0, 10, true);
const round5 = new Round(5, 2, 1, 12, true);
const round6 = new Round(6, 1, 2, 12, true);
const round7 = new Round(7, 0, 3, 12, false);
//assign rounds to array
const roundSchema = [round1, round2, round3, round4, round5, round6, round7];

//Gameplay logic
//determine how many decks based on playerCount

function newGame(playerCount) {
  const cards = merge(deck, deckCount(playerCount));
  return cards;
}

function gameStart(cards, playerCount) {
  shuffle(cards);
  let numberOfCards = roundSchema[0].cardCount;
  const playerHands = dealCards(cards, playerCount, numberOfCards, players);
  return playerHands;
}

export { newGame, gameStart, roundSchema };
