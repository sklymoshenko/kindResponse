<template>
  <div class="w-screen h-screen relative">
    <nuxt />
    <img
      src="../static/undraw_conversation_h12g.svg"
      alt="#"
      class="backround-image w-6/12 md:w-3/12 absolute top-2 left-1 md:top-2 md:left-3"
    >
    <img
      src="../static/undraw_super_thank_you_obwk.svg"
      alt="#"
      class="backround-image w-6/12 md:w-3/12 absolute top-2 right-1 md:top-2 md:right-5"
    >
    <img
      src="../static/undraw_share_opinion_jpw0.svg"
      alt="#"
      class="backround-image w-6/12 md:w-3/12 absolute bottom-2 right-4 md:bottom-2 md:right-15"
    >
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Default",
  components: {}
});
</script>
<style></style>
