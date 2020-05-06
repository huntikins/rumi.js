function shuffle(array) {
    var m = array.length, t, i;
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

function merge(array, count) {
    let mergedDeck = []
    for (i = 0;i<count;i++){
        mergedDeck.push.apply(mergedDeck, array)
    }
    return mergedDeck
}

function deckCount(players){
    //min 2 decks + 1 deck for each addit 2 people after 4 players
    if (players <= 4){return 2;}
    else{
        let diff = players - 4
        let decks = Math.ceil(diff/2)
        return decks + 2
    }
}

export {shuffle, merge, deckCount}