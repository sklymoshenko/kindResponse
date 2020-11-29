<template>
  <div
    class="started-test flex mx-auto border-secondary border-solid border-2 w-4/5 z-10 origin-center"
  >
    <div class="wrapper w-full md:w-1/2 flex flex-col  mt-3 md:my-auto">
      <BaseAttribute label="From" type="text" placeholder="Mike" />
      <BaseAttribute label="To" type="text" placeholder="My lovely Boss" />
      <BaseAttribute label=" Category" type="select" :options="selectOptions" @option:select="selectCategory" />
      <button
        type="submit"
        class="group transition duration-150 ease-in-out relative w-full mt-5 shadow-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary lg:hover:bg-secondary-hovered lg:active:bg-secondary-hovered focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ac"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg
            class="h-5 w-5 text-white group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        Find Response
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator";

import BaseAttribute from "@/components/Base/BaseAttribute.vue";
import { Category } from "@/interfaces/BaseInterfaces.ts";
import Fetcher from "@/plugins/Fetcher.ts";
@Component({
  components: {
    BaseAttribute
  }
})
export default class GetStarted extends Vue {
  selectOptions: Category[] = [];
  async created(): Promise<void> {
    await this.fetchCategories();
  }

  async fetchCategories(): Promise<void> {
    const CategoryFetcher = new Fetcher({ baseUrl: "/operations" });
    const options: Category[] = await CategoryFetcher.getCategories();
    this.selectOptions = options;
    this.selectDefault();
  }

  selectDefault() {
    this.$set(this.selectOptions[0], "selected", true);
  }

  selectCategory(category: Category): void {
    this.selectOptions.forEach((option) => {
      this.$set(option, "selected", category.name === option.name);
    });
  }
};
</script>

<style></style>
