<template>
  <div class="container h-screen">
    <MainTitle />
    <GetStarted />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainTitle from "../components/MainTitle.vue";
import GetStarted from "~/components/GetStarted.vue";

export default Vue.extend({
  name: "Index",
  components: { MainTitle, GetStarted }
});
</script>

<style>
</style>
