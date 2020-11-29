<template>
  <div class="rounded-md w-full my-2 relative">
    <label id="listbox-label" class="block text-sm font-medium text-gray-700 text-left pl-2">
      {{ label }}
    </label>
    <component
      :is="component"
      :id="label"
      :class="`focus:outline-none focus:border-secondary transition-colors duration-500 block w-full sm:text-lg rounded-sm font-primary pl-2 ${bordersClasses} ml-2`"
      :placeholder="placeholder"
    >
      <option value="" disabled selected>
        {{ label }}
      </option>
    </component>
  </div>
</template>

<script lang>
import Vue from "vue";
import BaseSelect from "@/components/Base/BaseSelect.vue";

export default Vue.extend({
  name: "BaseAttribute",
  components: {
    BaseSelect
  },
  props: {
    type: {
      type: String,
      default: "text",
      required: true
    },
    placeholder: {
      type: String,
      default: () => ""
    },
    label: {
      type: String,
      default: "Lbl:"
    }
  },
  data() {
    return {
      componentsMap: {
        text: "input",
        select: "BaseSelect"
      }
    };
  },
  computed: {
    component() {
      const type = this.type;
      return this.componentsMap[type] || "input";
    },
    bordersClasses() {
      const isTextInput = this.type === "text";
      return isTextInput ? "border-b border-solid border-primary" : "";
    }
  },
});
</script>

<style></style>
