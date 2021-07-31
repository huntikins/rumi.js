<template>
  <app-hero text-top="CONTRACT" text-bottom="RUMMY"/>
  <section>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="card-title text-center mb-4">
                Join Existing Game
              </h2>
              <p class="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore cumque! Tempore corporis maxime earum nisi inventore, distinctio asperiores quia sint ipsa soluta consequuntur fuga! Tempore expedita aliquam eligendi placeat?
              </p>
            </div>
            <div class="card-footer">
              <router-link to="/join" class="btn btn-primary btn-block w-100 btn-lg">Join Game</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="card-title text-center mb-4">
                Start New Game
              </h2>
              <p class="card-text text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati quaerat fuga quam possimus praesentium saepe eveniet labore illo, suscipit fugit cum minus atque, quis corporis quo consequuntur quisquam natus.
              </p>
            </div>
            <div class="card-footer">
                <router-link to="/new" class="btn btn-primary btn-block w-100 btn-lg">New Game</router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--
    Hero
    Intro/CTA
    About - later
  -->
</template>
<script>
import appHero from '../components/Hero.vue';
export default {
  name: 'Home',
  components: {
    appHero
  }
}
</script>
<style lang="scss">
.home {
  &-hero {
    background: linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url('../assets/img/hero.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      color: $blue;
      font-size: 8rem;
      letter-spacing: .5rem;
       -webkit-text-stroke: 4px $white;
      span {
        font-family: $headings;
        display: block;
        font-size: 8rem;
        letter-spacing: .5rem;
      }
    }
  }
}
</style>