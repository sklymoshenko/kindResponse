<template>
  <div class="rounded-md w-full md:w-2/5 mt-20 md:my-2">
    <BaseBubble :text="question" :name="currentTo" @text:copy="copyText" />
    <BaseBubble text="How should i respond hmm..." :side="rightSide" :name="currentFrom" @text:copy="copyText" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator";
import { Side } from "@/enums/enums.ts";
import { copyToClipboard } from "@/plugins/utils.ts";

import BaseBubble from "@/components/Base/BaseBubble.vue";
@Component({ components: { BaseBubble } })
export default class Chat extends Vue {
  @Prop({ type: String, default: "Mike" })
  from!: string;

  @Prop({ type: String, default: "My lovely Boss" })
  to!: string;

  @Prop({ type: String, default: "Loading..." })
  question!: string;

  rightSide: Side = Side.RIGHT;

  get currentTo(): string {
    return this.to;
  }

  get currentFrom(): string {
    return this.from;
  }

  async copyText(text: string): Promise<void> {
    await copyToClipboard(text);
  }
};
</script>

<style></style>
