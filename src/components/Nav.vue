<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Rumi</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/join">Join</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/new">New</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/how-to-play">How To Play</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Log In</router-link>
        </li>
        <li class="nav-item">
          <button @click="logOut" class="nav-link" >Log Out</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import firebase from 'firebase';

export default {
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          console.log(error.message);
          this.$router.push('/');
        });
    },
  },
}
</script>