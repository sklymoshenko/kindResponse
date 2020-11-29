import { mount } from "@vue/test-utils";
import GetStarted from "@/components/GetStarted.vue";
import MainTitle from "@/components/MainTitle.vue";
import BaseAttribute from "@/components/Base/BaseAttribute.vue";
import BaseSelect from "@/components/Base/BaseSelect.vue";

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
  describe("Base components", () => {
    describe("Attribute", () => {
      const wrapper = mount(BaseAttribute, { propsData: { type: "text" } });
      test("Should create a a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
      });
      test("Renders correctly", () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
    describe("Select", () => {
      const wrapper = mount(BaseSelect);
      test("Should create a a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
      });
      test("Renders correctly", () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });
});
