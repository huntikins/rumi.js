<template>
  <view class="container">
    <text class="text-blue text-logo text-large">rumi</text>
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
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-blue {
  color: #334ab7
}
.text-large {
  font-size: 50px;
}

.text-logo {
  font-weight: 200;
}
</style>
