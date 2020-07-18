<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card bg-light">
          <div class="card-header text-secondary">Login</div>
          <div class="card-body">
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label
                  for="email"
                  class="text-secondary col-md-4 col-form-label text-md-right"
                  >Email</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control text-secondary"
                    name="email"
                    value
                    required="required"
                    autofocus
                    v-model="form.email"
                    autocomplete="true"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right  text-secondary"
                  >Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control text-secondary"
                    name="password"
                    required="required"
                    v-model="form.password"
                    autocomplete="true"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
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
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("login", {
        email: this.form.email,
        password: this.form.password
      });
    }
  }
};
</script>
