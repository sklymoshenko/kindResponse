import { mount } from "@vue/test-utils";
import Index from "@/pages/index.vue";
import MainTitle from "@/components/MainTitle.vue";
import GetStarted from "@/components/GetStarted.vue";

describe("Module tests", () => {
  describe("Index", () => {
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
