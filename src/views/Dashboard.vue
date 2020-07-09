<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left color="#334ab7">
      <v-toolbar-title class="mr-12 align-center">
        <span class="title white--text font-weight-light">rumi</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large @click.stop="drawer = !drawer" class="ma-5" :v-ripple="false">
        <v-avatar size="100px" item>
          <v-img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Vuetify"
          ></v-img
        ></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped right>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"
          >SUBSCRIPTIONS</v-subheader
        >
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img
                :src="
                  `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
                "
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Browse Channels</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
