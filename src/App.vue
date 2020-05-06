<template>
  <div id="app">
  </div>
</template>

<script>
import baseDeck from '@/logic/cards.js';
import { shuffle, merge, deckCount, dealCards } from '@/logic/deck.js'
export default {
  data: () => {
    return {
      cards: [],
      decks: 0,
      playerCount: 6,
      playerHands: []
    }
  },
  created: function() {
    this.decks = deckCount(this.playerCount)
    this.cards = merge(baseDeck, this.decks)
    shuffle(this.cards)
    this.playerHands = dealCards(this.cards, this.playerCount, 10)
    console.log(this.cards)
  },
  mounted: function(){
    console.log(this.playerHands)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
