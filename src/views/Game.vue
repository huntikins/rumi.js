<template>
  <v-app>
    <h1 class="text-blue text-logo text-large">Lets Play</h1>
    <div class="d-flex">
      <template v-for="player in playerHands">
        <Hand :cards="player" :key="player.name" />
      </template>
    </div>
  </v-app>
</template>

<script>
import { playerCount } from "../logic/player";
import { newGame, gameStart } from "../logic/game.js";

import Hand from "../components/Hand";

export default {
  data: () => {
    return {
      cards: [],
      decks: 0,
      playerCount: 6,
      playerHands: []
    };
  },
  components: {
    Hand
  },
  created: function() {
    this.playerCount = playerCount();
    this.cards = newGame(this.playerCount);
    this.playerHands = gameStart(this.cards, this.playerCount, 10);
    console.log(this.cards);
  },
  mounted: function() {
    console.log(this.playerHands);
  }
};
</script>

<style lang="scss">
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-blue {
  color: #334ab7;
}
.text-large {
  font-size: 50px;
}

.text-logo {
  font-weight: 200;
}
</style>
