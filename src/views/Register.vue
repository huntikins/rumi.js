<template>
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form @submit.prevent="signUp">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="form.username" type="text" class="form-control" id="username">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="form.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="form.password" type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import firebase from "firebase";
import { usersRef } from '../main';
export default {
    data(){
        return {
            form: {
                email: '',
                password: '',
                username: '',
            },
            error: null
        }
    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then((data) => {
                    data.user.updateProfile({
                        displayName: this.form.username,
                        photoURL: 'https://icotar.com/avatar/'+this.form.username
                    })
                   usersRef.doc(data.user.uid).set({
                        username: this.form.username,
                        avi: 'https://icotar.com/avatar/'+this.form.username,
                        email: this.form.email,
                        friends: [],
                        rooms: []
                    })
                    .then(() => {
                        console.log("Document written");
                        this.$router.push('/account')
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                })
                .catch(({message}) => {
                    this.error = message;
                });
        }
    }
}
</script>