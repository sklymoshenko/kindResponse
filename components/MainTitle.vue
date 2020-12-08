<template>
  <span class="flex flex-col justify-center items-center mt-24 md:mb-8">
    <span class="flex items-end">
      <p class="title-test font-titles font-bold capitalize sm:text-lg md:text-2xl mr-1" :title="text">
        {{ text }}
      </p>
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
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class MainTitle extends Vue {
  text: string = "Kind responses for everybody";
};
</script>

<style></style>
