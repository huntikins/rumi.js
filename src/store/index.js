import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        // Update to sync with user schema in FB
        commit("SET_USER", {
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          avi: user.photoURL
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
})