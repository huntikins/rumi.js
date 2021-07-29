//establish the card deck as a variable
const deck = [];

//builds a single deck of cards
genSet("spades");
genSet("diamonds");
genSet("clubs");
genSet("hearts");
deck.push({
  id: generateId(),
  value: "joker",
  suit: "black",
  points: 50,
  front: `./img/cards/default/black_joker.png`,
  back: `./img/cards/default/back.png`
});
deck.push({
  id: generateId(),
  value: "joker",
  suit: "red",
  points: 50,
  front: `./img/cards/default/red_joker.png`,
  back: `./img/cards/default/back.png`
});

//generate the card objects using a for loop
function genSet(cardSuit) {
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
    deck.push({
      id: generateId(),
      value: cardValue,
      suit: cardSuit,
      points: cardPoint,
      front: `./img/cards/default/${cardValue}_of_${cardSuit}.png`,
      back: `./img/cards/default/back.png`
    });
  }
}

//generate a random hex uuid
function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// exports the card deck object
module.exports = deck;
