import { mount } from "@vue/test-utils";
import GetStarted from "@/components/GetStarted.vue";
import MainTitle from "@/components/MainTitle.vue";

describe("Module tests", () => {
  describe("Get Started", () => {
    const wrapper = mount(GetStarted);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Has main div", () => {
      expect(wrapper.find(".started-test").element).toBeDefined();
    });
  });
  describe("Main Title", () => {
    const wrapper = mount(MainTitle);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Has text and svg icon", () => {
      expect(wrapper.find(".title-test").element).toBeDefined();
      expect(wrapper.find(".icon-test").element).toBeDefined();
    });
  });
});
