<template>
  <div id="app" class="container">
    <div class="card-columns">
      <template v-for="card in cards">
        <div class="card" :key="card.id">
          <img :src="card.front" :alt="card.value + ' of ' + card.suit" class="card-img-top"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import baseDeck from '@/logic/cards.js';
import { shuffle, merge, deckCount } from '@/logic/decksetup.js'
export default {
  data: () => {
    return {
      cards: [],
      decks: 0,
      players: 4
    }
  },
  created: function() {
    this.decks = deckCount(this.players)
    console.log(this.decks)
    this.cards = merge(baseDeck, this.decks)
    shuffle(this.cards)
  },
  mounted: function(){
    console.log(this.cards)
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
