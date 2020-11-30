<template>
  <div class="rounded-md w-full my-2 relative">
    <label id="listbox-label" class="block text-sm font-medium text-gray-700 text-left pl-2">
      {{ label }}
    </label>
    <component
      :is="component"
      :id="label"
      v-bind="$props"
      :class="`focus:outline-none focus:border-secondary transition-colors duration-500 block w-full sm:text-lg rounded-sm font-primary ${textInputClasses}`"
      :placeholder="placeholder"
      autocomplete="chrome-off"
      @option:select="optionSelected"
      @input="handleInputChange"
    >
      <option value="" disabled selected>
        {{ label }}
      </option>
    </component>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue
} from "nuxt-property-decorator";

import BaseSelect from "@/components/Base/BaseSelect.vue";
import { ComponentsMap, Category } from "@/interfaces/BaseInterfaces.ts";

@Component({
  components: {
    BaseSelect
  }
})
export default class BaseAttribute extends Vue {
  @Prop({ type: String, default: "text", required: true }) type!: string;
  @Prop({ type: String, default: "" }) placeholder!: string;
  @Prop({ type: String, default: "Lbl" }) label!: string;
  @Prop({ type: Array, default: () => [{ name: "No options" }] })
  options!: Category[];

  componentsMap: ComponentsMap = {
    text: "input",
    select: "BaseSelect"
  };

  @Emit("option:select")
  optionSelected(option: Category): Category {
    return option;
  }

  @Emit("input:changed")
  handleInputChange(e: { target: HTMLInputElement }): string {
    const input = e.target.value || "Mike";
    return input;
  }

  get component(): string {
    const type: string = this.type;
    return this.componentsMap[type as keyof ComponentsMap] || "input";
  };

  get textInputClasses(): string {
    const isTextInput: boolean = this.type === "text";
    return isTextInput ? "border-b border-solid border-primary pl-2" : "";
  }
};
</script>

<style></style>
