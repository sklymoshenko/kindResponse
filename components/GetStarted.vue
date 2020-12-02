<template>
  <div class="wrapper w-full md:w-2/5 flex flex-col mt-3 md:my-auto shadow-md p-2">
    <BaseAttribute label="From" type="text" placeholder="Mike" @input:changed="handleFromChange" />
    <BaseAttribute label="To" type="text" placeholder="My lovely Boss" @input:changed="handleToChange" />
    <BaseAttribute
      label=" Category"
      type="select"
      :options="selectOptions"
      @option:select="selectCategory($event, selectOptions)"
    />
    <button
      type="submit"
      class="group transition duration-150 ease-in-out relative w-full mt-5 shadow-sm flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary lg:hover:bg-secondary-hovered lg:active:bg-secondary-hovered focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ac"
    >
      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 text-white group-hover:text-white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </span>
      Find Response
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from "nuxt-property-decorator";

import BaseAttribute from "@/components/Base/BaseAttribute.vue";
import { Category } from "@/interfaces/BaseInterfaces.ts";
import CategoryFetcher from "@/plugins/Categories.ts";
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
    const Categories = new CategoryFetcher({ baseUrl: "/operations" });
    const options: Category[] = await Categories.get();
    this.selectOptions = options;
    this.selectDefault(this.selectOptions);
  }

  @Emit("to:changed")
  handleToChange(to: string): string {
    return to;
  }

  @Emit("from:changed")
  handleFromChange(from: string): string {
    return from;
  }

  selectDefault(options: Category[]): void {
    if (!options?.length) return;
    this.$set(options[0], "selected", true);
  }

  selectCategory(category: Category, options: Category[]): void {
    if (!category || !options?.length) return;
    options.forEach((option) => {
      this.$set(option, "selected", category.name === option.name);
    });
  }
}
</script>

<style></style>
