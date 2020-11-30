<template>
  <div :class="`clearfix flex items-end ${imageSide}`">
    <!-- <img class="inline-block h-12 w-12 md:h-16 md:w-16 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
    <span class="inline-block h-12 w-12 md:h-16 md:w-16 rounded-full ring-2 ring-white" v-html="avatar" />
    <div
      :class="`${bubbleBg} w-1/2 mt-2 mb-8 p-2 rounded-lg text-white`"
    >
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator";
import { Side } from "@/enums/enums.ts";
import Avatar from "@/plugins/Avatar.ts";
@Component
export default class BaseBuble extends Vue {
  @Prop({ type: String, default: "How are you ?" })
  text!: string;

  @Prop({ type: String, default: "Mike" })
  name!: string;

  @Prop({ type: String, default: Side.LEFT })
  side!: string;

  get imageSide(): string {
    return this.side === Side.RIGHT ? "flex-row-reverse" : "";
  }

  get bubbleBg(): string {
    return this.side === Side.RIGHT ? "bg-danger" : "bg-secondary";
  }

  get avatar(): string {
    const AvatarSVG = new Avatar(this.name);
    const svg = AvatarSVG.create();
    return svg;
  }
};
</script>

<style></style>
