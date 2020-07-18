<template>
  <div class="px-5">
    <h1>{{ cards.name }}</h1>
    <div v-for="card in cards.hand" :key="card.id">
      <Card
        :id="card.id"
        :front="card.front"
        :back="card.back"
        :altFront="card.value + ' of ' + card.suit"
      />
    </div>
  </div>
</template>
<script>
import Card from "./Card";

export default {
  props: ["cards"],
  components: {
    Card
  }
};
</script>
