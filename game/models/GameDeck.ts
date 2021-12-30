import { Deck } from "../../interfaces";
import Card from "./Card";

class GameDeck {
  cards: Deck[];
  playerCount: number;
  decksUsed: number;

  constructor(playerCount: number) {
    this.cards = [];
    this.playerCount = playerCount;
    this.decksUsed = this.deckCount(this.playerCount);
  }

  genDeck(id: string) {
    //builds a single deck of cards
    this.genSet("spades", id);
    this.genSet("diamonds", id);
    this.genSet("clubs", id);
    this.genSet("hearts", id);
    this.cards.push(
      new Card(
        this.generateId("joker", "black", id),
        "joker",
        "black",
        50,
        `../img/cards/default/black_joker.png`,
        `../img/cards/default/back.png`
      )
    );
    this.cards.push(
      new Card(
        this.generateId("joker", "red", id),
        "joker",
        "red",
        50,
        `../img/cards/default/red_joker.png`,
        `../img/cards/default/back.png`
      )
    );
    return this.cards;
  }

  //generate the card objects using a loop
  genSet(cardSuit: string, id: string) {
    for (let i = 1; i < 14; i++) {
      var cardValue;
      var cardPoint;
      switch (i) {
        case 1:
          cardValue = "ace";
          cardPoint = 20;
          break;
        case 10:
          cardValue = 10;
          cardPoint = 10;
          break;
        case 11:
          cardValue = "jack";
          cardPoint = 10;
          break;
        case 12:
          cardValue = "queen";
          cardPoint = 10;
          break;
        case 13:
          cardValue = "king";
          cardPoint = 10;
          break;
        default:
          cardValue = i;
          cardPoint = 5;
      }
      this.cards.push(
        new Card(
          this.generateId(cardValue, cardSuit, id),
          cardValue,
          cardSuit,
          cardPoint,
          `../img/cards/default/${cardValue}_of_${cardSuit}.png`,
          `../img/cards/default/back.png`
        )
      );
    }
  }

  //generate a random hex uuid
  generateId(cardValue: string | number, cardSuit: string, id: string) {
    return `${cardSuit}_${cardValue}_${id}`;
  }

  // determine deck count based on player count
  deckCount(playerCount: number) {
    //min 2 decks + 1 deck for each addit 2 people after 4 playerCount
    if (playerCount <= 4) {
      return 2;
    } else {
      let diff = playerCount - 4;
      let decks = Math.ceil(diff / 2);
      return decks + 2;
    }
  }
}

export default GameDeck;
