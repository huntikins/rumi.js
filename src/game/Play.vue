<template>
  <button v-if="game.host == this.$store.state.user.data.id" @click="gameInit">Start Game</button>
  <p v-else>Waiting for Host to start the game</p>
  <button @click="turnStart">Draw</button>
  <ol v-if="game.active">
    <li v-for="card in game.users[playerIndex].hand" :key="card.id">
      <button :id="card.id" @click="discard(card.id)">{{ card.value }} of {{ card.suit }}</button>
    </li>
  </ol>
  <ol v-if="game.active">
    <li v-for="card in game.discards" :key="card.id">
      <button :id="card.id" @click="buy(card.id)">{{ card.value }} of {{ card.suit }}</button>
    </li>
  </ol>
  <!--
        Game UI
    -->
</template>

<script>
import { start } from '../assets/js/game';
import { roomsRef } from '../main';
export default {
  name: 'Play',
  data() {
    return {
      playerId: 1,
      playerIndex: null,
      currentPlayer: 0,
      openBuy: false,
      game: {},
      room: null,
    }
  },
  mounted(){
    this.room = this.$route.params.id
    console.log('sync data')
    roomsRef.doc(this.room).onSnapshot((doc) => {
        this.game = doc.data();
    });
  },
  updated(){
    roomsRef.doc(this.room).set(this.game).then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  },
  methods: {
    async gameInit() {
      // Need to figure out how to turn off the sync

      //hard coding this for now, will hook this up to state later
      let { hands, liveDeck } = await start(this.game.users, this.game.goal.cardCount);
      this.game.cards = liveDeck;
      this.game.users.forEach((player, index) => {
        player.hand.push(...hands[index])
      })
      this.playerIndex = this.game.users.findIndex(player => this.$store.state.user.data.id == player.id);
      this.game.active = true;
      this.game.users[this.currentPlayer].turn = true
    },
    turnStart: function(){
      const player = this.game.users[this.playerIndex];
    // Check if players turn
      if(player.turn){
        // Discard is no longer able to be bought
        this.game.openBuy = false;
        // Check if discard is needed (only alows 1 card to be drawn)
        if(!player.discardNeeded){
          player.hand.push(this.game.cards.shift());
        }
        // After card drawn discard is required
        player.discardNeeded = true;
        console.log(this.game)
      } else {
        console.log('It is not your turn');
      }
    },
    discard: function(id){
      const player = this.game.users[this.playerIndex];
      // Confirm player needs to discard
      if(player.discardNeeded){
        // Get index of card to be removed from players hand
        let i = player.hand.findIndex(card => card.id == id)
        // Copy card into discard array
        console.log(i)
        this.game.discards.push(player.hand[i]);
        // Remove card from game array
        player.hand.splice(i,1);
        // Turn is over and discard is no longer needed
        player.discardNeeded = false;
        // Players turn has ended officially
        player.turn = false;
        // Open discards for buying
        this.game.openBuy = true;
        // Change to next players turn, we must first check if it is the last player
        // in the array, if so reset the index to 0 so array starts over
        if(this.game.users.length-1 == this.game.currentPlayer){
          this.game.currentPlayer = 0
        } else {
          this.game.currentPlayer++
        }
        // Assign turn to next player
        this.game.users[this.game.currentPlayer].turn = true;
        console.log(this.game)
      } else {
        console.log("You can only discard during yor turn");
      }
    },
    buy: function(id){
      const player = this.game.users[this.playerIndex];
      // Check if discard needed (if they need to discard that means they have already drawn)
      if(player.discardNeeded == false && this.game.openBuy){
        // Set player buy state
        player.isBuying = true;
        // Evaluate if other players interested
        let buyers = this.game.users.map(player => {
          player.isBuying == true
        })
        // Check if local player won buy
        if(buyers.length == 1 && buyers[0].id == this.playerId){
          // Get index of card from discard array
          let i = this.game.discards.findIndex(card => card.id == id)
          // Push discarded card into player hand
          player.hand.push(this.discards[i]);
          // Remove card from discard array
          this.discards.splice(i,1);
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
