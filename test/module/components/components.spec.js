import { mount } from "@vue/test-utils";
import GetStarted from "@/components/GetStarted.vue";
import MainTitle from "@/components/MainTitle.vue";
import BaseAttribute from "@/components/Base/BaseAttribute.vue";

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

  describe("Base Attribute", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(BaseAttribute, { propsData: { type: "text" } });
    });
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });

    describe("Computed properties", () => {
      describe("Component", () => {
        test("is defined", () => {
          const component = wrapper.vm.component;
          expect(component).toBeDefined();
        });
        test("return 'input' if invalid type providen", async() => {
          const defaultComponent = "input";
          await wrapper.setProps({ type: "date" });
          const component = wrapper.vm.component;
          expect(component).toEqual(defaultComponent);
        });
        test("returns right component based on type", async() => {
          const expectedComponents = ["input", "BaseSelect"];
          expect(wrapper.vm.component).toEqual(expectedComponents[0]);

          await wrapper.setProps({ type: "select" });
          expect(wrapper.vm.component).toEqual(expectedComponents[1]);
        });
      });
      describe("textInputClasses", () => {
        test("is defined when type is 'text'", () => {
          const classes = wrapper.vm.textInputClasses;
          expect(classes).toBeDefined();
        });
        test("is not empty string when type is not 'text'", async() => {
          await wrapper.setProps({ type: "select" });
          const classes = wrapper.vm.textInputClasses;
          expect(classes).toBeFalsy();
        });
      });
    });
  });
});
