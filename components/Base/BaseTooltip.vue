<template>
  <div :class="`tooltip ${showTooltip} ${boxState}`" class=" w-24 text-white text-center p-1 rounded-lg top-0 text-xs absolute transition duration-300">
    <span :class="`${triangleState}`" class="triangle absolute transition duration-300" />
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

import { State } from "@/enums/enums.ts";
@Component
export default class BaseTooltip extends Vue {
  @Prop({ type: String, default: "Tooltip" })
  text!: string;

  @Prop({ type: Boolean, default: false })
  show!: boolean;

  @Prop({ type: String, default: State.NEUTRAL })
  state!: string;

  get showTooltip(): string {
    return this.show ? "block" : "hidden";
  }

  get boxState(): string {
    return this.state === State.SUCCESS ? "bg-success" : "bg-primary";
  }

  get triangleState(): string {
    return this.state === State.SUCCESS ? "success" : "neutral";
  }
}
</script>

<style>
.tooltip {
  left: calc(100% + 11px);
}

.triangle {
  border-width: 0 6px 6px;
  border-color: transparent;
  left: -6px;
  top: calc(50% - 3px);
  transform: rotate(270deg) translate-y(-50%);
}

.neutral {
  border-bottom-color: #3f3e56;
}

.success {
  border-bottom-color: #4bb564;
}
</style>
