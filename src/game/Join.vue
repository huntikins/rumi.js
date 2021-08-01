<template>
    <app-hero text-top="JOIN" text-bottom="GAME" />
    <section>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Host</th>
            <th scope="col">Players</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.id">
            <th scope="row">
              <img :src="room.host_avi" :alt="room.host_name + ' Profile Picture'" class="avatar">
            </th>
            <td>{{ room.host_name }}</td>
            <td>{{ room.users.length }} / 20</td>
            <td>{{ room.name }}</td>
            <!-- need to add computed property, don't show if user present in user array -->
            <td v-if="userNotPresent(room.id)"><button class="btn btn-primary" @click="joinGame(room.id)" >Join Game</button></td>
            <td v-else><router-link :to="`/play/${room.id}`" class="btn btn-primary">Join Game</router-link></td>
          </tr>
        </tbody>
      </table>
    </section>
</template>
<script>
import appHero from '../components/Hero.vue';
import { roomsRef } from '../main';
import firebase from 'firebase';
export default {
  name: 'Join',
  data() {
    return {
      rooms: []
    }
  },
  components: {
    appHero
  },
  mounted(){
    // Need to get this updated to onSnapshot so that rooms update in real time. 
    // Will compare the active property of room onject
    roomsRef.where("active", "==", false).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.rooms.push(doc.data());
    });
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  },
  methods: {
    userNotPresent: function(id){
      let roomIndex = this.rooms.findIndex(room => room.id == id)
      let room = this.rooms[roomIndex]
      let userPresent = room.users.findIndex(user => user.id == this.$store.state.user.data.id)
      return userPresent;
    },
    joinGame(id) {
      console.log(id)
      roomsRef.doc(id).get().then((doc) => {
          if (doc.exists) {
              roomsRef.doc(id).update({
                users: firebase.firestore.FieldValue.arrayUnion({
                  id: this.$store.state.user.data.id,
                  name: this.$store.state.user.data.displayName,
                  hand: [],
                  score: 0,
                  turn: false,
                  avi: this.$store.state.user.data.avi,
                  isBuying: false,
                  discardNeeded: false,
                })
              })
              this.$router.push(`/play/${id}`)
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    }
  }
}
</script>