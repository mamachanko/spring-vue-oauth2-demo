import {mount, createLocalVue, Wrapper} from "@vue/test-utils";
import createRouter from "@/router";
import store from "@/store";
import App from "@/App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe("App.vue", () => {

  let app: Wrapper<App>;

  beforeEach(() => {
  });

  // describe("when not logged in", () => {
  //
  //   beforeEach(async () => {
  //     store.replaceState({token: ""});
  //     app = mount(App, {
  //       localVue,
  //       store,
  //       router: createRouter()
  //     });
  //   });
  //
  //   it("show login page", async () => {
  //     expect(() => app.get(Login)).not.toThrow()
  //   });
  //
  // });

  describe("when logged in", () => {

    beforeEach(async () => {
      let store = {
        getters: {
          isAuthenticated: true
        }
      };
      app = mount(App, {
        mocks: {
          $store: store
        },
        router,
        localVue,
      });
      router.push("/");
      await app.vm.$nextTick()
    });

    it("show home page", async () => {
      expect(() => app.get(Home)).not.toThrow()
    });

  });

});
