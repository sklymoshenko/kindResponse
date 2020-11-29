import { mount } from "@vue/test-utils";
import GetStarted from "@/components/GetStarted.vue";
import MainTitle from "@/components/MainTitle.vue";

describe("Snapshot tests", () => {
  describe("Get Started", () => {
    const wrapper = mount(GetStarted);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
  describe("Main Title", () => {
    const wrapper = mount(MainTitle);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
