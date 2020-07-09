<template>
  <div>
    <h1>Hello World</h1>
    <Hand :cards="cards" />
  </div>
</template>

<script>
import Hand from "./Hand";

export default {
  props: ["cards"],
  components: { Hand }
};
</script>
