import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("should show Login page", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toMatch("Welcome");
  });
});
