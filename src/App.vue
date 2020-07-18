<template>
  <div>
    <navbar></navbar>
    <main class="py-4 app__shadow">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:wght@300300;400;700");
html,
body {
  height: 100%;
  background-color: #333;
  font-family: "Open Sans";
}
/* Links */
a,
a:focus,
a:hover {
  color: #fff;
  text-decoration: none;
}
.app__shadow {
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}
/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: 0.05rem solid rgb(24, 23, 23);
}
</style>
