
//shuffle elements based on Fisher-Yates shuffle method
function shuffle(array: any) {
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

export default shuffle;