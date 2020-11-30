<template>
  <div class="container h-screen">
    <MainTitle />
    <div
      class="started-test flex flex-col md:flex-row mx-auto border-secondary border-solid border-2 w-4/5 z-10 origin-center"
    >
      <GetStarted @from:changed="handleFromChange" @to:changed="handleToChange" />
      <Chat :to="to" :from="from" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import MainTitle from "~/components/MainTitle.vue";
import GetStarted from "~/components/GetStarted.vue";
import Chat from "~/components/Chat.vue";

@Component({
  components: { MainTitle, GetStarted, Chat }
})

export default class Index extends Vue {
  from: string = "Mike";
  to: string = "My lovely Boss";

  handleFromChange(from: string): void {
    this.from = from;
  }

  handleToChange(to: string): void {
    this.to = to;
  }
};
</script>

<style></style>
