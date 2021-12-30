import { Player } from '../interfaces';
import {deal} from './actions';
import roundSchema  from './models/Round';

// Shuffle and deal cards
async function start(players: Player[], cardCount: number) {
  // Generate deck
  const { cards } = await fetch('/.netlify/functions/buildDeck', {
    method: 'POST',
    body: JSON.stringify({
      playerCount: players.length
    })
  }).then(res => res.json())
  // Deal cards to players and return the player objects as well as current card state
  const { hands, liveDeck } = deal(cardCount, players, cards);
  // Return players (hands) and cards (liveDeck)
  return { hands, liveDeck };
}

// Export game mechanics
export { start, roundSchema };
