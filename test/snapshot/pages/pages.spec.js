import { mount, createLocalVue } from "@vue/test-utils";

import BlurClosing from "@/directives/blurClosing.ts";
import Index from "@/pages/index.vue";
import Chat from "~/components/Chat.vue";

import { mockFetchedCategories } from "@/test/mocks.ts";
const { fetchedOptions } = mockFetchedCategories();

const localVue = createLocalVue();
localVue.directive("blur-closing", BlurClosing);

describe("Module tests", () => {
  describe("Index", () => {
    let wrapper;
    beforeEach(async() => {
      fetch.mockResponse(JSON.stringify(fetchedOptions));
      wrapper = mount(Index);
      await wrapper.findComponent(Chat).setProps("question", "Test question");
    });
    test("Should create a a vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });
    test("Renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });
    test("Set 'to'", async() => {
      await wrapper.vm.handleToChange("Mike");
      expect(wrapper.element).toMatchSnapshot();
    });
    test("Set 'from'", async() => {
      await wrapper.vm.handleFromChange("Boss");
      expect(wrapper.element).toMatchSnapshot();
    });
    test("Randon questions with different input ", async() => {
      await wrapper.vm.randomIntegerBetween(0, 1);
      expect(wrapper.element).toMatchSnapshot();
      await wrapper.vm.randomIntegerBetween(3, 1);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
