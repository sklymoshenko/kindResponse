<template>
  <div class="rounded-md w-full md:w-1/2 my-2 border-secondary border">
    <BaseBubble :text="`Hi can you tell me why you are not at work ?`" />
    <BaseBubble :text="`I dont know`" :side="rightSide" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator";
import { Side } from "@/enums/enums.ts";

import BaseBubble from "@/components/Base/BaseBubble.vue";
@Component({ components: { BaseBubble } })
export default class Chat extends Vue {
  rightSide: Side = Side.RIGHT;
};
</script>

<style></style>
