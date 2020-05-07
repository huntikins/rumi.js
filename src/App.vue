<template>
  <div id="app">
  </div>
</template>

<script>
import { playerCount } from './logic/player';
import { newGame, gameStart } from './logic/game.js';
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
    this.playerCount = playerCount();
    this.cards = newGame(this.playerCount);
    this.playerHands = gameStart(this.cards, this.playerCount, 10)
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
