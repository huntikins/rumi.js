<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 bg-dark py-2 rounded">
        <h2 class="text-white">Players</h2>
        <hr class="border-white" />
        <template v-if="players.length > 0">
          <div
            class="card bg-secondary mb-2"
            v-for="(player, index) in players"
            :key="player.id"
            :id="player.id"
          >
            <h2 class="text-white card-heading pt-2 d-flex">
              <span class="px-2 pt-2 border-right">{{ index + 1 }}</span>
              <img
                class="avatar rounded pl-3 pr-2"
                width="75px"
                :src="player.avatar"
                :alt="player.name"
              />
              <span class="pl-2 pt-1">{{ player.name }}</span>
              <i
                v-if="!player.approved"
                class="fas fa-times text-danger ml-auto px-3 pt-2"
                @click="removePlayer(player.id)"
              ></i>
            </h2>
          </div>
        </template>
        <hr class="border-white" />
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              ><i class="fas fa-user-plus"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control dropdown rounded"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Invite Friends"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="searchFriends"
            v-model="query"
            v-on:keyup="searchFriends"
          />
          <div
            v-if="playerQuery.length > 0"
            class="dropdown-menu"
            aria-labelledby="searchFriends"
          >
            <template v-for="user in playerQuery">
              <a
                class="dropdown-item d-flex"
                href="#"
                :key="user.id"
                :id="user.id"
                @click="inviteUser(user.id)"
              >
                <img
                  class="avatar rounded"
                  width="25px"
                  :src="user.avatar"
                  :alt="user.username"
                />
                <span class="px-2">
                  {{ user.username }}
                </span>
              </a>
            </template>
          </div>
          <div v-else class="dropdown-menu" aria-labelledby="searchFriends">
            <a class="dropdown-item" href="#">
              {{ error }}
            </a>
          </div>
        </div>
        <hr class="border-white" />
      </div>
      <div class="col-md-7 col-sm-12">
        <div class="jumbotron bg-dark">
          <h1 class="jumbotron-title text-center text-white py-4">
            Ready to start the game?
          </h1>
          <button class="btn btn-primary btn-lg btn-block text-center">
            Lets Go!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { roomsCollection, usersCollection, firebase } from "../js/firebase";
export default {
  data: function() {
    return {
      room: "",
      players: [],
      query: "",
      playerQuery: [],
      error: "Type in username and press enter to search"
    };
  },
  created() {
    this.populatePlayers();
  },
  methods: {
    populatePlayers: function() {
      var self = this;
      this.room = this.$route.params.room;
      roomsCollection
        .doc(this.room)
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            let game = doc.data();
            for (var i = 0; i < game.player.length; i++) {
              self.players.push(game.player[i]);
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },
    removePlayer: function(player) {
      var self = this;
      var index = this.players.findIndex(u => u.id == player);
      roomsCollection
        .doc(self.room)
        .update({
          player: firebase.firestore.FieldValue.arrayRemove({
            id: self.players[index].id,
            name: self.players[index].name,
            avatar: self.players[index].avatar,
            turn: false,
            approved: false
          })
        })
        .then(function() {
          usersCollection
            .doc(player)
            .update({
              rooms: firebase.firestore.FieldValue.arrayRemove(self.room)
            })
            .then(function() {
              self.players.splice(index, 1);
            })
            .catch(function(error) {
              console.error("Error removing document: ", error);
            });
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    searchFriends: function(event) {
      var self = this;
      if (event.key == "Enter") {
        usersCollection
          .where("username", "==", this.query)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              self.playerQuery.push(doc.data());
            });
          })
          .catch(function(error) {
            self.playerQuery = [];
            self.error = "No players found, please check spelling and retry.";
            console.log(error);
          });
      }
    },
    inviteUser: function(player) {
      let self = this;
      var index = this.playerQuery.findIndex(u => u.id == player);
      roomsCollection
        .doc(self.room)
        .update({
          player: firebase.firestore.FieldValue.arrayUnion({
            id: self.playerQuery[index].id,
            name: self.playerQuery[index].username,
            avatar: self.playerQuery[index].avatar,
            turn: false,
            approved: false
          })
        })
        .then(function() {
          self.players.push({
            id: self.playerQuery[index].id,
            name: self.playerQuery[index].username,
            avatar: self.playerQuery[index].avatar,
            turn: false,
            approved: false
          });
          usersCollection
            .doc(player)
            .update({
              rooms: firebase.firestore.FieldValue.arrayUnion(self.room)
            })
            .then(function() {
              self.playerQuery = [];
              self.error = "Type in username and press enter to search";
              self.query = "";
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
};
</script>
