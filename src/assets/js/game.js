import { deal, roundSchema } from './actions';

// Shuffle and deal cards
async function start(players, cardCount) {
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
