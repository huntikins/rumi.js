// Creates player object
function Player(id, name, turn, avatar) {
    this.id = id;
    this.name = name;
    this.hand = [];
    this.score = 0;
    this.turn = turn;
    this.avatar = avatar;
    this.isBuying = false;
    this.discardNeeded = false;
}

//deals cards out to playerCount
function deal(cardCount, players, cards) {
    let liveDeck = shuffle(cards);
    let hands = players;
    //determine player count
    for(let i=0; i < cardCount;i++){  
        hands.forEach(player => {
            player.hand.push(liveDeck.shift());
        })
    }
    return {hands, liveDeck};
}

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

export { deal, shuffle, roundSchema, Player }