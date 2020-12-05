<template>
  <div :class="`clearfix flex items-end ${imageSide}`">
    <span class="inline-block h-12 w-12 md:h-16 md:w-16 rounded-full ring-2 ring-white" v-html="avatar" />
    <div
      :class="`bubble ${bubbleBg} w-1/2 mt-2 mb-8 p-2 rounded-lg text-white shadow-lg cursor-pointer transform hover:scale-105 transition duration-200 relative`"
      @mouseover="resetTooltip"
      @mouseleave="showTooltip = false"
      @click="copy"
    >
      {{ text }}
      <BaseTooltip :text="tooltipInfo" :show="showTooltip" :state="tooltipState" :side="side" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Prop,
  Vue
} from "nuxt-property-decorator";

import { Side, State } from "@/enums/enums.ts";

import Avatar from "@/plugins/Avatar.ts";
import BaseTooltip from "@/components/Base/BaseTooltip.vue";

@Component({ components: { BaseTooltip } })
export default class BaseBuble extends Vue {
  @Prop({ type: String, default: "How are you ?" })
  text!: string;

  @Prop({ type: String, default: "Mike" })
  name!: string;

  @Prop({ type: String, default: Side.LEFT })
  side!: string;

  showTooltip: boolean = false;
  tooltipInfo: string = "Click to copy!";
  tooltipState: string = State.NEUTRAL;

  get imageSide(): string {
    return this.side === Side.RIGHT ? "flex-row-reverse" : "";
  }

  get bubbleBg(): string {
    return this.side === Side.RIGHT ? "bg-danger md:hover:bg-danger-hovered" : "bg-secondary md:hover:bg-secondary-hovered";
  }

  get avatar(): string {
    const AvatarSVG = new Avatar(this.name);
    const svg = AvatarSVG.create();
    return svg;
  }

  @Emit("text:copy")
  copy() {
    this.tooltipInfo = "Copied!";
    this.tooltipState = State.SUCCESS;
    return this.text;
  }

  resetTooltip() {
    this.showTooltip = true;
    this.tooltipInfo = "Click to copy!";
    this.tooltipState = State.NEUTRAL;
  }
};
</script>

<style></style>
