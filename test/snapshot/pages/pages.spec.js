import { mount } from "@vue/test-utils";
import Index from "@/pages/index.vue";

describe("Module tests", () => {
  describe("Index", () => {
    const wrapper = mount(Index);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
