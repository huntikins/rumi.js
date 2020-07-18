<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-secondary">Create an Account</div>
          <div class="card-body">
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label
                  for="username"
                  class="col-md-4 col-form-label text-md-right text-secondary"
                  >Username</label
                >

                <div class="col-md-6">
                  <input
                    id="username"
                    type="name"
                    class="form-control text-secondary"
                    name="username"
                    value
                    required
                    autofocus
                    v-model="form.username"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right text-secondary"
                  >Email</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control text-secondary"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right text-secondary"
                  >Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control text-secondary"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer text-secondary text-center">
            Already signed up? Log in to play
            <a href="/login" class="text-primary">here</a>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("signup", {
        email: this.form.email,
        password: this.form.password,
        username: this.form.username
      });
    }
  }
};
</script>
