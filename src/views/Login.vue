<template>
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form @submit.prevent="signIn">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import firebase from 'firebase';
export default {
    data(){
        return {
            form: {
                email: '',
                password: ''
            },
            error: null
        }
    },
    methods: {
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                .then(() => {
                    this.$router.push('/account')
                })
                .catch((error) => {
                    console.log('issues')
                    this.error = error.message
                });
        }
    }
}
</script>