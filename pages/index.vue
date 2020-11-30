<template>
  <div class="container h-screen">
    <MainTitle />
    <div
      class="started-test flex flex-col md:flex-row mx-auto border-secondary border-solid border-2 w-4/5 z-10 origin-center"
    >
      <GetStarted />
      <Chat />
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

};
</script>

<style></style>
