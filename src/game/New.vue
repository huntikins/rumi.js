<template>
    <app-hero textTop="NEW" textBottom="GAME"/>
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-6 mx-auto">
                    <h2>Create Game Room</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-6 mx-auto">
                    <form @submit.prevent="createRoom">
                        <div class="mb-3">
                            <label for="room_name" class="form-label">Room Name</label>
                            <input v-model="form.room_name" type="text" class="form-control" id="room_name">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import appHero from '../components/Hero.vue';
import { roomsRef } from '../main'
export default {
  name: 'New',
  data() {
      return {
          form: {
              room_name: null
          }
      }
  },
  methods: {
      createRoom(){
          roomsRef.add({
              active: false,
              name: this.form.room_name,
              currentPlayer: 0,
              openBuy: false,
              cards: [],
              discards: [],
              goal: {
                  round: 1,
                  sets: 2,
                  runs: 0,
                  cardCount: 10,
                  discard: true,
              },
              users: [{
                id: this.$store.state.user.data.id,
                name: this.$store.state.user.data.displayName,
                hand: [],
                score: 0,
                turn: false,
                avi: this.$store.state.user.data.avi,
                isBuying: false,
                discardNeeded: false,
              }],
              host: this.$store.state.user.data.id,
              host_avi: this.$store.state.user.data.avi,
              host_name: this.$store.state.user.data.displayName
          })
        .then((docRef) => {
            roomsRef.doc(docRef.id).set({
              id: docRef.id
            }, { merge: true }).then(()=> {
              this.$router.push(`/play/${docRef.id}`)
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
      }
  },
  components: {
    appHero
  }
}
</script>