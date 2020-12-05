<template>
  <div class="rounded-md w-full md:w-2/5 mt-20 md:my-2">
    <BaseBubble :text="question" :name="currentTo" @text:copy="copyText" />
    <BaseBubble
      :text="currentRespond"
      :side="rightSide"
      :name="currentFrom"
      :loading="loading"
      @text:copy="copyText"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Side } from "@/enums/enums.ts";
import { copyToClipboard } from "@/plugins/utils.ts";
import { Respond } from "@/interfaces/BaseInterfaces.ts";

import BaseBubble from "@/components/Base/BaseBubble.vue";
@Component({ components: { BaseBubble } })
export default class Chat extends Vue {
  @Prop({ type: Object, default: () => ({ message: "Hmmm", subtitle: "Me" }) })
  respond!: Respond;

  @Prop({ type: String, default: "Mike" })
  from!: string;

  @Prop({ type: String, default: "My lovely Boss" })
  to!: string;

  @Prop({ type: Boolean, default: false })
  loading!: boolean;

  @Prop({ type: String, default: "Loading..." })
  question!: string;

  rightSide: Side = Side.RIGHT;

  get currentTo(): string {
    return this.to;
  }

  get currentFrom(): string {
    return this.from;
  }

  get currentRespond(): string {
    return this.respond.message;
  }

  async copyText(text: string): Promise<void> {
    await copyToClipboard(text);
  }
}
</script>

<style></style>
