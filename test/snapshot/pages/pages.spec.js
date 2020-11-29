import { mount, createLocalVue } from "@vue/test-utils";
import BlurClosing from "@/directives/blurClosing.ts";
import Index from "@/pages/index.vue";
const localVue = createLocalVue();

localVue.directive("blur-closing", BlurClosing);

describe("Module tests", () => {
  describe("Index", () => {
    fetch.mockResponse(JSON.stringify([{ name: "test", selected: false }, { name: "test2", selected: false }]));
    const wrapper = mount(Index);
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
