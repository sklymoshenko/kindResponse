<template>
  <div
    class="rounded-md shadow-md w-full my-2"
  >
    <input
      :id="label"
      type="text"
      class="focus:outline-none focus:ring focus:border-danger block w-full sm:text-lg border-gray-300 rounded-sm font-primary h-8 pl-2"
      :placeholder="label"
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseAttribute",
  props: {
    label: {
      type: String,
      default: "Lbl:"
    }
  }
});
</script>

<style></style>
