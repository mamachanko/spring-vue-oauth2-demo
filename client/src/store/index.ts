import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import querystring from 'query-string';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || ""
  },
  mutations: {
    authenticated(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = "";
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      axios
        .post(
            '/oauth/token',
            querystring.stringify({'grant_type': 'password', 'client_id': 'client', username, password}),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            )
        .then(response => response.data.access_token)
        .then(token => {
          localStorage.setItem("token", token);
          commit("authenticated", token);
          router.push({ name: "Home" });
        });
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit("logout");
    }
  },
  modules: {},
  getters: {
    isAuthenticated: state => !!state.token
  }
});
