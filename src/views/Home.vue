<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left color="#334ab7">
      <v-toolbar-title class="mr-12 align-center">
        <span class="title white--text font-weight-light">rumi</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn icon color="white" title="sign-up">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
      <v-btn icon color="white" title="login">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <h1 class="rumi-logo">rumi</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-trending-up", text: "Most Popular" },
      { icon: "mdi-youtube-subscription", text: "Subscriptions" },
      { icon: "mdi-history", text: "History" },
      { icon: "mdi-playlist-play", text: "Playlists" },
      { icon: "mdi-clock", text: "Watch Later" }
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>

<style>
.rumi-logo {
  color: #334ab7;
  font-size: 50px;
  font-weight: 200;
}
</style>
