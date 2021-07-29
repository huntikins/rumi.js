import { createStore } from 'vuex'
import * as fb from "../assets/js/firebase";
import router from "../router/index";

export default createStore({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      // set user profile in state
      commit("setUserProfile", userProfile.data());
      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/dashboard");
      } else if (router.currentRoute.path === "/register") {
        router.push("/login");
      }
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        id: user.uid,
        username: form.username,
        email: form.email,
        avatar: `https://api.adorable.io/avatars/100/${user.uid}`,
        rooms: [],
        friends: []
      });
      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async logout({ commit }) {
      await fb.auth.signOut();
      // clear userProfile and redirect to /login
      commit("setUserProfile", {});
      router.push("/login");
    }
  }
})