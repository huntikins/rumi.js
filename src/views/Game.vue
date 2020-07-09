<template>
  <v-app>
    <h1 class="text-blue text-logo text-large">Lets Play</h1>
    <div class="d-flex">
      <template v-for="player in playerHands">
        <Table :cards="player" :key="player.name" />
      </template>
    </div>
  </v-app>
</template>

<script>
import { players } from "../js/player";
import { newGame, gameStart } from "../js/game.js";
import Table from "../components/Table";

export default {
  data: () => {
    return {
      cards: [],
      decks: 0,
      playerCount: 0,
      playerHands: []
    };
  },
  components: {
    Table
  },
  created: function() {
    this.playerCount = players.length;
    this.cards = newGame(this.playerCount);
    this.playerHands = gameStart(this.cards, this.playerCount);
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
