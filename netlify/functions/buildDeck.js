const fetch = require('node-fetch')

exports.handler = async function(event){
    //figure out how many players are in the game to determine the deck count
    const eventBody = JSON.parse(event.body);

    //establish the card deck as a variable
    let deck = [];

    function genDeck(id){
        //builds a single deck of cards
        genSet("spades", id);
        genSet("diamonds", id);
        genSet("clubs", id);
        genSet("hearts", id);
        deck.push({
            id: generateId("joker", "black", id),
            value: "joker",
            suit: "black",
            points: 50,
            front: `../img/cards/default/black_joker.png`,
            back: `../img/cards/default/back.png`
        });
        deck.push({
            id: generateId("joker", "red", id),
            value: "joker",
            suit: "red",
            points: 50,
            front: `../img/cards/default/red_joker.png`,
            back: `../img/cards/default/back.png`
        });
        return deck;
    }

    //generate the card objects using a loop
    function genSet(cardSuit, id) {
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
                id: generateId(cardValue, cardSuit, id),
                value: cardValue,
                suit: cardSuit,
                points: cardPoint,
                front: `../img/cards/default/${cardValue}_of_${cardSuit}.png`,
                back: `../img/cards/default/back.png`
            });
        }
    }

    //generate a random hex uuid
    function generateId(cardValue, cardSuit, id) {
        return `${cardSuit}_${cardValue}_${id}`
    }

    // determine deck count based on player count
    function deckCount(playerCount) {
        //min 2 decks + 1 deck for each addit 2 people after 4 playerCount
        if (playerCount <= 4) {
            return 2;
        } else {
            let diff = playerCount - 4;
            let decks = Math.ceil(diff / 2);
            return decks + 2;
        }
    }

    // establish final array containing all cards  users can play with
    let decksUsed = deckCount(eventBody.playerCount)
    let cards = [];

    // populate array with decks based on player count
    for( i = 0;i < decksUsed; i++ ){
        cards = [...genDeck(i+1)]
    }


    return {
        statusCode: 200,
        body: JSON.stringify({
            cards: cards
        })
    }
}