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
                    <form @submit.prevent="gameStart">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input v-model="username" type="text" class="form-control" id="username">
                        </div>
                        <div class="mb-3">
                            <label for="avatar" class="form-label">Player Image</label>
                            <input v-model="avatar" type="url" class="form-control" id="avatar" aria-describedby="textHelp">
                            <div id="textHelp" class="form-text">Get the URL to an image and add it here</div>
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
export default {
  name: 'New',
  data() {
      return {
          username: '',
          avatar: ''
      }
  },
  methods: {
      gameStart(){
          console.log("i've been called")
          this.$router.push(`/play/${this.username}`)
      }
  },
  components: {
    appHero
  }
}
</script>