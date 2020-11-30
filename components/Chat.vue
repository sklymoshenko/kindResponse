<template>
  <div class="rounded-md w-full md:w-1/2 my-2 border-secondary border">
    <BaseBubble :text="`Hi can you tell me why you are not at work ?`" :name="currentTo" />
    <BaseBubble :text="`I dont know`" :side="rightSide" :name="currentFrom" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator";
import { Side } from "@/enums/enums.ts";

import BaseBubble from "@/components/Base/BaseBubble.vue";
@Component({ components: { BaseBubble } })
export default class Chat extends Vue {
  @Prop({ type: String, default: "Mike" })
  from!: string;

  @Prop({ type: String, default: "My lovely Boss" })
  to!: string;

  rightSide: Side = Side.RIGHT;

  get currentTo(): string {
    return this.to;
  }

  get currentFrom(): string {
    return this.from;
  }
};
</script>

<style></style>
