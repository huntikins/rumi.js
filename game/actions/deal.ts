//deals cards out to playerCount
import { Deck, Player } from 'interfaces';
import shuffle from './shuffle';

function deal(cardCount: number, players: Player[], cards: Deck[]) {
    console.log(cardCount)
    let liveDeck = shuffle(cards);
    // TODO create typescript interface for game object
    let hands: any = []
    players.forEach( (  ) => {
        hands.push([])
    })
    console.log(liveDeck)
    //determine player count
    for(let i=0; i < cardCount;i++){  
        players.forEach( (_: any, index: number) => {
            hands[index].push(liveDeck.shift())
        })
    }
    return {hands, liveDeck} as {hands: any, liveDeck: Deck[]};
}

export default deal;