<template>
  <button @click="getCards">Generate cards</button>
  <ol>
    <li v-for="card in cards" :key="card.id">{{ card.value }} of {{ card.suit }}</li>
  </ol>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      playerCount: 6,
      cards: []
    }
  },
  methods: {
    async getCards(){
      const { cards } = await fetch('/.netlify/functions/buildDeck', {
        method: 'POST',
        body: JSON.stringify({
          playerCount: this.playerCount
        })
      }).then(res => res.json())
      this.cards = cards
    }
  }
}
</script>
