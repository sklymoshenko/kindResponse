import { mount, createLocalVue } from "@vue/test-utils";
import BlurClosing from "@/directives/blurClosing.ts";
import Index from "@/pages/index.vue";
import MainTitle from "@/components/MainTitle.vue";
import GetStarted from "@/components/GetStarted.vue";

import { mockFetchedCategories } from "@/test/mocks.ts";
const { fetchedOptions } = mockFetchedCategories();

const localVue = createLocalVue();
localVue.directive("blur-closing", BlurClosing);

describe("Module tests", () => {
  describe("Index", () => {
    fetch.mockResponse(JSON.stringify(fetchedOptions));
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
