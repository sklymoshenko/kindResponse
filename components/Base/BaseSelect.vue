<template>
  <div>
    <button
      id="dropdown-button"
      type="button"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
      class="relative w-full border border-primary rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm excluded"
      @click="openDropDown($event)"
    >
      <span class="flex items-center">
        <span class="ml-3 block truncate">
          {{ selected.name }}
        </span>
      </span>
      <span
        class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
      >
        <!-- Heroicon name: selector -->
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <!--
      Select popover, show/hide based on select state.
    -->
    <div
      v-blur-closing="{
        handler: 'blurHandler'
      }"
      :class="showDropdown ? 'block' : 'hidden'"
      class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
    >
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm h-48"
      >
        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
        <li
          v-for="(option, i) in options"
          :id="`listbox-item-${i}`"
          :key="option.name"
          role="option"
          class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-secondary hover:text-white"
          @click="optionSelected(option)"
        >
          <div class="flex items-center">
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="ml-3 block font-normal truncate">
              {{ option.name }}
            </span>
          </div>

          <!--
            Checkmark, only display for selected option.
          -->
          <span
            v-if="option.selected"
            class="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <!-- Heroicon name: heart -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="icon-test stroke-current text-danger w-8"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "nuxt-property-decorator";
import { Category } from "@/interfaces/BaseInterfaces.ts";
@Component
export default class BaseSelect extends Vue {
  @Prop({ type: Array, default: () => [{ name: "No options" }] })
  options!: Category[];

  showDropdown: boolean = false;
  isOptionHovered: boolean = false;
  openDropDown(): void {
    this.showDropdown = !this.showDropdown;
  }

  blurHandler(): void {
    this.showDropdown = false;
  }

  @Emit("option:select")
  optionSelected(option: Category): Category {
    this.showDropdown = false;
    return option;
  }

  get selected(): Category {
    const selected = this.options.find(({ selected }) => selected);
    const defaultOptions = { name: "Nothing...", url: "", fields: [] };
    return selected || defaultOptions;
  }
}
</script>

<style lang="scss" scoped></style>
