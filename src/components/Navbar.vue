<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-danger">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand navbar__text text-white"
        >Contract Rummy</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="showNav">
            <li class="nav-item">
              <a
                class="nav-link navbar__text text-white"
                @click.prevent="viewAccount"
              >
                <i class="far fa-user-circle fa-2x" title="Account"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navbar__text text-white"
                @click.prevent="signOut"
                ><i class="fas fa-sign-out-alt fa-2x" title="Log Out"></i
              ></a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link navbar__text text-white"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="register"
                class="nav-link navbar__text text-white"
                >Join</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("logout");
    },
    viewAccount() {
      this.$router.replace({
        name: "account"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.bg-danger {
  background-color: #77d7b9 !important;
}
.navbar__text {
  text-shadow: 2px 3px 2px rgba(#000, 0.18);
}
</style>
