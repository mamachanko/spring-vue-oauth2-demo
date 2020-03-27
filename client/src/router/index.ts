import Vue from "vue";
import VueRouter, {Route} from "vue-router";
import App from "../App.vue";
import store from "../store";
import axios from 'axios';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: App
    }
  ]
});

router.beforeEach((to: Route, from: Route, next: Function) => {
  console.log(to);

  if (to.path === "/return") {
    const code = to.query.code;
    console.log(code);
    axios.get(`/oauth/token?grant_type=authorization_code&client_id=client&code=${code}`, {auth: {username: 'client', password: 'secret'}})
        .then(response => {
          console.log(response.data);
          localStorage.setItem("token", response.data.accessToken);
        });
    next("/");
  }

  if (to.path === "/" && !store.getters.isAuthenticated) {
    console.log("not authenticated");
    location.href = "/oauth/authorize?grant_type=authorization_code&response_type=code&client_id=client";
  }
});

export default router;
