import { mount, createLocalVue } from "@vue/test-utils";
import BlurClosing from "@/directives/blurClosing.ts";
import Index from "@/pages/index.vue";
import MainTitle from "@/components/MainTitle.vue";
import GetStarted from "@/components/GetStarted.vue";

const localVue = createLocalVue();
localVue.directive("blur-closing", BlurClosing);

describe("Module tests", () => {
  describe("Index", () => {
    fetch.mockResponse(JSON.stringify([{ name: "test", selected: false }, { name: "test2", selected: false }]));
    const wrapper = mount(Index);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Has child components", () => {
      const mainTitle = wrapper.findComponent(MainTitle);
      const getStarted = wrapper.findComponent(GetStarted);
      expect(mainTitle.vm).toBeTruthy();
      expect(getStarted.vm).toBeTruthy();
    });
  });
});
