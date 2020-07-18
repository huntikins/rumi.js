<template>
  <div
    class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center"
  >
    <main role="main" class="inner cover">
      <h1 class="cover-heading">Contract Rummy</h1>
      <p class="lead">
        Contract Rummy is a fun card game based around the collection of sets
        (3+ same rank) and runs (4+ same suit in order). Each round has its own
        specific quantity of sets/runs that must be played before you can be
        eligable to win.
      </p>
      <p class="lead">
        <button class="btn btn-lg btn-secondary" @click.prevent="createAccount">
          Play Now
        </button>
      </p>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    createAccount() {
      this.$router.replace({
        name: "dashboard"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.cover-container {
  max-width: 42em;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
}
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
}
</style>
