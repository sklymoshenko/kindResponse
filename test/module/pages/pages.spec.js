import { mount, createLocalVue } from "@vue/test-utils";
import BlurClosing from "@/directives/blurClosing.ts";
import Index from "@/pages/index.vue";
import MainTitle from "@/components/MainTitle.vue";
import GetStarted from "@/components/GetStarted.vue";

import { mockFetchedCategories } from "@/test/mocks.ts";
const { fetchedOptions, fetchedRespond } = mockFetchedCategories();

const localVue = createLocalVue();
localVue.directive("blur-closing", BlurClosing);

const mockClipboard = jest.fn(x => x);
// Mock clibboard for jest
window.__defineGetter__("navigator", function() {
  return {
    clipboard: {
      writeText: () => mockClipboard()
    }
  };
});

describe("Module tests", () => {
  describe("Index", () => {
    fetch.mockResponseOnce(JSON.stringify(fetchedOptions));
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
    test("Fetch categories on load", async() => {
      fetch.mockResponseOnce(JSON.stringify(fetchedOptions));
      await wrapper.vm.fetchCategories();
      expect(wrapper.vm.selectOptions).toHaveLength(2);
    });
    test("Dont set default if no options", async() => {
      const { fetchedOptions } = mockFetchedCategories();
      await wrapper.setData({ selectOptions: fetchedOptions });
      expect(wrapper.vm.selectOptions).toHaveLength(fetchedOptions.length);
      expect(wrapper.vm.selectOptions).toEqual(fetchedOptions);
    });
    test("Dont set selected by input if no options", async() => {
      const { fetchedOptions } = mockFetchedCategories();
      await wrapper.setData({ selectOptions: fetchedOptions });
      await wrapper.vm.selectCategory();
      expect(wrapper.vm.selectOptions).toHaveLength(fetchedOptions.length);
      expect(wrapper.vm.selectOptions).toEqual(fetchedOptions);
    });
    test("Set 'selected' true for one, others are false", async() => {
      await wrapper.vm.selectCategory(fetchedOptions[1], wrapper.vm.selectOptions);
      expect(wrapper.vm.selectOptions[1].selected).toBe(true);
    });
    test("Set loading statuses", async() => {
      expect(wrapper.vm.loading).toBe(false);
      fetch.mockResponseOnce(JSON.stringify(fetchedRespond));
      await wrapper.vm.getResponse();
      expect(wrapper.vm.loading).toBe(false);
    });
    test("Set respond", async() => {
      const spy = jest.spyOn(wrapper.vm, "setRespond");
      fetch.mockResponseOnce(JSON.stringify(fetchedRespond));
      await wrapper.vm.getResponse();
      expect(spy).toBeCalled();
      expect(wrapper.vm.respond).toStrictEqual(fetchedRespond);
    });
    test("'From' handler sets 'from'", async() => {
      const from = "Mike";
      await wrapper.vm.handleFromChange(from);
      expect(wrapper.vm.from).toEqual(from);
    });
    test("'To' handler sets 'to'", async() => {
      const to = "Mike";
      await wrapper.vm.handleToChange(to);
      expect(wrapper.vm.to).toEqual(to);
    });
    test("Always returns a question", () => {
      const question = wrapper.vm.currentQuestion();
      expect(question).toBeDefined();
    });
    test("a > b -> returns a random integer between", () => {
      const min = [0, 2, 8];
      const max = [3, 6, 10];
      min.forEach((minNum, i) => {
        const maxNum = max[i];
        const result = wrapper.vm.randomIntegerBetween(minNum, maxNum);
        expect(result).toBeGreaterThanOrEqual(minNum);
        expect(result).toBeLessThanOrEqual(maxNum);
      });
    });
    test("a < b -> returns a random integer between", () => {
      const min = [0, 2, 8];
      const max = [3, 6, 10];
      min.forEach((minNum, i) => {
        const maxNum = max[i];
        const result = wrapper.vm.randomIntegerBetween(maxNum, minNum);
        expect(result).toBeGreaterThanOrEqual(minNum);
        expect(result).toBeLessThanOrEqual(maxNum);
      });
    });
    test("a and b arent integers -> returns 0", () => {
      const min = "15";
      const max = "2";
      const result = wrapper.vm.randomIntegerBetween(min, max);
      expect(result).toBe(0);
    });
  });
});
