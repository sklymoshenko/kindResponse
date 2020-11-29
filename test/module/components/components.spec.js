import { mount, createLocalVue } from "@vue/test-utils";
import GetStarted from "@/components/GetStarted.vue";
import MainTitle from "@/components/MainTitle.vue";
import BaseAttribute from "@/components/Base/BaseAttribute.vue";
import BaseSelect from "@/components/Base/BaseSelect.vue";
import BlurClosing from "@/directives/blurClosing.ts";

const localVue = createLocalVue();
localVue.directive("blur-closing", BlurClosing);

const fetchedOptions = [{ name: "test", selected: false }, { name: "test2", selected: false }];

describe("Module tests", () => {
  describe("Get Started", () => {
    let wrapper;
    beforeEach(() => {
      fetch.resetMocks();
      fetch.mockResponse(JSON.stringify(fetchedOptions));
      wrapper = mount(GetStarted);
    });
    test("Should create a a vue instance", async() => {
      await wrapper.vm.fetchCategories();
      expect(wrapper.vm).toBeTruthy();
    });
    test("Fetch categories on load", async() => {
      await wrapper.vm.fetchCategories();
      expect(wrapper.vm.selectOptions).toHaveLength(2);
    });
    test("Select first value as default", async() => {
      await wrapper.vm.fetchCategories();
      expect(wrapper.vm.selectOptions[0].selected).toBe(true);
    });
    test("Set 'selected' true for one, other are false", async() => {
      await wrapper.vm.selectCategory(fetchedOptions[1]);
      expect(wrapper.vm.selectOptions[1].selected).toBe(true);
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
      test("Emit 'option:select", async() => {
        await wrapper.vm.optionSelected(fetchedOptions[0]);
        expect(wrapper.emitted()["option:select"]).toBeTruthy();
        expect(wrapper.emitted()["option:select"][0][0]).toEqual(fetchedOptions[0]);
      });
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

  describe("Base Select", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(BaseSelect, { propsData: { options: fetchedOptions } });
    });
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });

    describe("Interaction with input", () => {
      test("Click on button should call 'openDropDown'", async() => {
        const button = wrapper.find("button#dropdown-button");
        const spy = jest.spyOn(wrapper.vm, "openDropDown");
        await button.trigger("click");
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalledTimes(1);
      });
      test("openDropDown => toggle showDropDown", async() => {
        const button = wrapper.find("button#dropdown-button");
        await button.trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.showDropdown).toBe(true);
        await button.trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.showDropdown).toBe(false);
      });
      test("Click on option calls 'optionSelected'", async() => {
        const option = wrapper.find("li#listbox-item-0");
        const spy = jest.spyOn(wrapper.vm, "optionSelected");
        await option.trigger("click");
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalledTimes(1);
      });
      test("Click on option calls emits 'option:select'", async() => {
        const option = wrapper.find("li#listbox-item-0");
        await option.trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted()["option:select"]).toBeDefined();
        // cant reset wrapper.emmited(), it saves state from prev test
        expect(wrapper.emitted()["option:select"][0][1]).toBe(fetchedOptions[0]);
      });
    });
    describe("Selected", () => {
      let wrapper;
      beforeEach(() => {
        fetchedOptions[0].selected = true;
        wrapper = mount(BaseSelect, { propsData: { options: fetchedOptions } });
      });
      test("Returns options with selected true", () => {
        const selected = wrapper.vm.selected;
        expect(selected).toEqual(fetchedOptions[0]);
      });
      test("Always defined", async() => {
        await wrapper.setProps({ options: [] });
        const selected = wrapper.vm.selected;
        expect(selected).toBeDefined();
      });
      test("Close dropdown on blur", () => {
        wrapper.vm.blurHandler();
        expect(wrapper.vm.showDropdown).toBe(false);
      });
    });
  });
});
