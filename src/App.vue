<template>
  <header id="nav">
    <app-nav />
  </header>
  <main>
    <router-view />
  </main>
  <footer>

  </footer>
</template>
<script>
import appNav from './components/Nav.vue';
export default {
  components:{
    appNav
  }
}
</script>
<style lang="scss">
* {
  font-family: $body;
}
html {
  font-size: 62.5%; /* 10px = 1rem */
}
body {
  font-size: 16px; /* px fallback */
  font-size: 1.6rem; /* default font-size for document */
  line-height: 1.5; 
  margin: 0;
}
h1, h3, h3, h4, h5, h6 {
  font-family: $headings;
}
</style>
