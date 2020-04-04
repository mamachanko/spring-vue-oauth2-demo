import Vue from "vue";
import VueRouter, {Route} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

// @ts-ignore
const createRouter: VueRouter = (store) => {
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to: Route, from: Route, next: Function) => {
        if (store.getters.isAuthenticated) {
          next();
          return;
        }
        next({ name: "Login" });
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/logout",
      name: "Logout",
      beforeEnter: (to: Route, from: Route, next: Function) => {
        store.dispatch("logout");
        next({ name: "Login" });
      }
    }
  ];

  return new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
};

export default createRouter;
