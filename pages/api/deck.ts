/*
* @route: /api/deck
* @param: Playercount must be provided
* @return: Array of card objects
*/

import type { NextApiRequest, NextApiResponse } from 'next'
import GameDeck from '../../game/utils/deck'

export default function handler(req: NextApiRequest, res: NextApiResponse){
    //figure out how many players are in the game to determine the deck count
    const {players}: {players: number} = req.body;

    if(!players){
      res.status(400).json({ message: 'No game data provided' })
    }

    const game = new GameDeck(players)

    const deck:Deck[] = []
    // populate array with decks based on player count
    for( let i:number = 0;i < game.deckCount(players); i++ ){
        let count = i+1;
        const cards = game.genDeck(count.toString())
        deck.push(...cards)
    }
    

    res.status(200).json({ deck: deck })
}
