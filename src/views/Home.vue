<template>
  <button @click="gameInit">Start Game</button>
  <button @click="turnStart">Draw</button>
  <ol>
    <li v-for="card in player.hand" :key="card.id">
      <button id="card.id" @click="discard(card.id)">{{ card.value }} of {{ card.suit }}</button>
    </li>
  </ol>
  <ol>
    <li v-for="card in discards" :key="card.id">
      <button id="card.id" @click="buy(card.id)">{{ card.value }} of {{ card.suit }}</button>
    </li>
  </ol>
</template>

<script>
import { start, Player, roundSchema } from '../assets/js/game';
export default {
  name: 'Home',
  data() {
    return {
      playerId: 1,
      playerIndex: null,
      currentPlayer: null,
      openBuy: false,
      cards: [],
      discards: [],
      game: [],
      goal: roundSchema[0],
      player: []
    }
  },
  methods: {
    async gameInit() {
      //hard coding this for now, will hook this up to state later
      let players = [
        new Player(1, 'Ceri', true, 'https://i.pravatar.cc/300'),
        new Player(2, 'Hunter', false, 'https://i.pravatar.cc/300'),
        new Player(3, 'Lext', false, 'https://i.pravatar.cc/300')
      ]
      let { hands, liveDeck } = await start(players, this.goal);
      this.cards = liveDeck;
      this.game = hands;
      this.playerIndex = this.game.findIndex(player => this.playerId == player.id);
      this.player = this.game[this.playerIndex];
    },
    turnStart: function(){
    // Check if players turn
      if(this.player.turn){
        // Discard is no longer able to be bought
        this.openBuy = false;
        // Set the current player's index
        this.currentPlayer = this.playerIndex
        // Check if discard is needed (only alows 1 card to be drawn)
        if(!this.player.discardNeeded){
          this.player.hand.push(this.cards.shift());
        }
        // After card drawn discard is required
        this.player.discardNeeded = true;
        console.log(this.game)
      } else {
        console.log('It is not your turn');
      }
    },
    discard: function(id){
      // Confirm player needs to discard
      if(this.player.discardNeeded){
        // Get index of card to be removed from players hand
        let i = this.game[this.playerIndex].hand.findIndex(card => card.id == id)
        // Copy card into discard array
        this.discards.push(this.game[this.playerIndex].hand[i]);
        // Remove card from game array
        this.game[this.playerIndex].hand.splice(i,1);
        // Reset player hand to reflect new game state
        this.player.hand = this.game[this.playerIndex].hand;
        // Turn is over and discard is no longer needed
        this.player.discardNeeded = false;
        // Players turn has ended officially
        this.player.turn = false;
        // Open discards for buying
        this.openBuy = true;
        // Change to next players turn, we must first check if it is the last player
        // in the array, if so reset the index to 0 so array starts over
        if(this.game.length-1 == this.currentPlayer){
          this.currentPlayer = 0
        } else {
          this.currentPlayer++
        }
        // Assign turn to next player
        this.game[this.currentPlayer].turn = true;
        console.log(this.game)
      } else {
        console.log("You can only discard during yor turn");
      }
    },
    buy: function(id){
      // Check if discard needed (if they need to discard that means they have already drawn)
      if(!this.player.discardNeeded && this.activeSale){
        // Set player buy state
        this.player.isBuying = true;
        // Evaluate if other players interested
        let buyers = this.game.map(player => {
          player.isBuying == true
        })
        // Check if local player won buy
        if(buyers.length == 1 && buyers[0].id == this.playerId){
          // Get index of card from discard array
          let i = this.discards.findIndex(card => card.id == id)
          // Push discarded card into player hand
          this.game[this.playerIndex].hand.push(this.discards[i]);
          // Remove card from discard array
          this.discards.splice(i,1);
          // Reset player hand to reflect new game state
          this.player.hand = this.game[this.playerIndex].hand;
        } 
        // Need to handle multiple buyers after realtime updates have been established.
        // If multiple buyers check to see if local player wins
        // else if (buyers.length > 1 && buyers[0].id == this.playerId){
        //   // Determine who has the closest turn
        //   if(this.currentPlayer < this.playerIndex)
        // }
      } else {
        console.log('you can only buy')
      }
    }
  }
}
</script>
