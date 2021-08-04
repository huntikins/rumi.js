<template>
    <section class="container-fluid" v-if="ready">
      <!-- Game UI -->
      <div class="row row-cols-xl-2 row-cols-1 g-4 py-5">
        <div class="col" v-for="player in game.users" :key="player.id">
          <p :class="`player_name mb-0 ${player.turn ? 'bg-success' : 'bg-light'}`" id="offcanvasScrollingLabel">{{ player.name }}</p>
          <span class="ps-4">{{ player.score }} pts</span>
          <div :class="`player d-flex justify-content-center align-items-center px-4 py-4 ${player.turn ? 'bg-success' : 'bg-light'}`">
            <div class="d-flex">
              <img :src="player.avi" :alt="player.name" class="rounded-circle avatar" width="75" height="75">
            </div>
            <div class="cards_in_play w-100">
              <ul class="mb-0 ps-3" v-for="(set, index) in game.goal.sets" :key="'set_' + index">
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
              </ul>
              <ul class="mb-0 ps-3" v-for="(run, index) in game.goal.runs" :key="'run_' + index">
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
                <li>
                  <img src="../../public/img/cards/default/back.png" alt="Image Back" class="img-fluid" width="50">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Player UI -->
      <div class="offcanvas offcanvas-bottom show h-100" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="visibility: visible;max-height: 50vh;">
          <div :class="`offcanvas-header d-flex justify-content-between align-items-center px-4 ${this.game.users[this.playerIndex].turn ? 'bg-success' : 'bg-light'}`">
            <!-- Player Information -->
            <div class="d-flex justify-content-center align-items-center px-4">
              <img :src="$store.state.user.data.avi" :alt="$store.state.user.data.displayName" class="rounded-circle avatar" width="75" height="75">
              <p class="offcanvas-title ps-3 mb-0" id="offcanvasScrollingLabel">{{ $store.state.user.data.displayName }}</p>
            </div>
            <div class="controls" v-if="game.active">
              <button @click="turnStart" :disabled="game.users[playerIndex].turn ? false : true">Draw</button>
              <button>Buy</button>
              <button :disabled="game.users[playerIndex].turn ? false : true">Go Down</button>
            </div>
            <div class="controls" v-if="!game.active && game.users[playerIndex].id == game.host">
              <button @click="gameInit">Start Game</button>
            </div>
            <div class="controls" v-if="!game.active && game.users[playerIndex].id !== game.host">
              <p class="mb-0">Waiting for host to begin the game</p>
            </div>
            <div class="goal">
              <p>Goal</p>
              <p v-if="game.goal.sets">{{ game.goal.sets }} Sets</p>
              <p v-if="game.goal.runs">{{ game.goal.runs }} Run{{ game.goal.runs > 2 ? 's' : '' }}</p>
              <p v-if="!game.goal.discard">No Discard</p>
            </div>
          </div>
          <div class="offcanvas-body">
            <!-- Card Grid -->
            <div class="row">
              <div class="col-lg-12">
                <!-- Cards -->
                <div class="row">
                  <div class="col-lg-1 col-md-2 col-sm-3" v-for="card in game.users[playerIndex].hand" :key="card.id">
                    <button @click="discard(card.id)"><img :src="card.front" :alt="card.id" class="img-fluid"/></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section v-else class="game_pending bg-dark d-flex justfy-content-center align-items-center">
      <h1 class="text-white text-center mx-auto">Loading Game Data</h1>
    </section>
</template>
<style lang="scss">
.game_pending {
  height: 100vh;
  width: 100vw;
  text-align: center;
}
.player {
  p {
    font-family: $headings;
    letter-spacing: .15rem;
  }
}
.offcanvas-header {
  border-bottom: 1px solid rgba(0,0,0,.2);
  flex-wrap: wrap;
  .cards_in_play {
    @media(max-width: 992px){
      padding-top: 2rem;
      order: 3;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.offcanvas-title {
  font-family: $headings;
  letter-spacing: .15rem;
}
.avatar {
  border: 1px solid rgba(0,0,0,.2);
}
.cards_in_play {
  display: flex;
  padding-right: 3rem;
  ul {
    list-style-type: none;
    display: flex;
    margin-left: 2.5rem;
    li {
      margin: 0 .25rem;
      img {
        border: 1px solid rgba(0,0,0,.2);
      }
    }
  }
}
.player_name {
  background-color: #f8f9fa;
  display: inline-block;
  padding: .15rem 2rem;
  font-family: $headings;
  letter-spacing: .15rem;
}
.goal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 3rem;
  p {
    margin-bottom: 0;
    font-family: $headings;
  }
  @media(max-width: 992px){
    flex-direction: row;
    p {
      padding-right: 2rem;
    }
  }
}
</style>
<script>
import { start } from '../assets/js/game';
import { roomsRef } from '../main';
export default {
  name: 'Play',
  data() {
    return {
      ready: false,
      playerId: 1,
      playerIndex: null,
      currentPlayer: 0,
      openBuy: false,
      game: {},
      room: null,
    }
  },
  mounted(){
    this.room = this.$route.params.id
    console.log('sync data')
    roomsRef.doc(this.room).onSnapshot((doc) => {
        this.game = doc.data();
        this.ready = true;
        this.playerIndex = this.game.users.findIndex(player => this.$store.state.user.data.id == player.id);
    })
  },
  updated(){
    roomsRef.doc(this.room).set(this.game).then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  },
  methods: {
    async gameInit() {
      // Need to figure out how to turn off the sync

      //hard coding this for now, will hook this up to state later
      let { hands, liveDeck } = await start(this.game.users, this.game.goal.cardCount);
      this.game.cards = liveDeck;
      this.game.users.forEach((player, index) => {
        player.hand.push(...hands[index])
      })
      this.game.active = true;
      this.game.users[this.currentPlayer].turn = true
    },
    turnStart: function(){
      const player = this.game.users[this.playerIndex];
    // Check if players turn
      if(player.turn){
        // Discard is no longer able to be bought
        this.game.openBuy = false;
        // Check if discard is needed (only alows 1 card to be drawn)
        if(!player.discardNeeded){
          player.hand.push(this.game.cards.shift());
        }
        // After card drawn discard is required
        player.discardNeeded = true;
        console.log(this.game)
      } else {
        console.log('It is not your turn');
      }
    },
    discard: function(id){
      const player = this.game.users[this.playerIndex];
      // Confirm player needs to discard
      if(player.discardNeeded){
        // Get index of card to be removed from players hand
        let i = player.hand.findIndex(card => card.id == id)
        // Copy card into discard array
        console.log(i)
        this.game.discards.push(player.hand[i]);
        // Remove card from game array
        player.hand.splice(i,1);
        // Turn is over and discard is no longer needed
        player.discardNeeded = false;
        // Players turn has ended officially
        player.turn = false;
        // Open discards for buying
        this.game.openBuy = true;
        // Change to next players turn, we must first check if it is the last player
        // in the array, if so reset the index to 0 so array starts over
        if(this.game.users.length-1 == this.game.currentPlayer){
          this.game.currentPlayer = 0
        } else {
          this.game.currentPlayer++
        }
        // Assign turn to next player
        this.game.users[this.game.currentPlayer].turn = true;
        console.log(this.game)
      } else {
        console.log("You can only discard during yor turn");
      }
    },
    buy: function(id){
      const player = this.game.users[this.playerIndex];
      // Check if discard needed (if they need to discard that means they have already drawn)
      if(player.discardNeeded == false && this.game.openBuy){
        // Set player buy state
        player.isBuying = true;
        // Evaluate if other players interested
        let buyers = this.game.users.map(player => {
          player.isBuying == true
        })
        // Check if local player won buy
        if(buyers.length == 1 && buyers[0].id == this.playerId){
          // Get index of card from discard array
          let i = this.game.discards.findIndex(card => card.id == id)
          // Push discarded card into player hand
          player.hand.push(this.discards[i]);
          // Remove card from discard array
          this.discards.splice(i,1);
        } 
        // Need to handle multiple buyers after realtime updates have been established.
        // If multiple buyers check to see if local player wins
        // else if (buyers.length > 1 && buyers[0].id == this.playerId){
        //   // Determine who has the closest turn
        //   if(this.currentPlayer < this.playerIndex)
        // }
      } else {
        console.log('you can only buy')
      }
    }
  }
}
</script>
