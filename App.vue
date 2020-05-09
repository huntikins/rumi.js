<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
  </view>
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
.text-container {
  flex: 1;
  margin-bottom: 30;
}
</style>
