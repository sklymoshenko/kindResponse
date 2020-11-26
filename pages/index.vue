<template>
  <div class="container">
    <Logo />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "../components/Logo.vue";
export default Vue.extend({
  name: "Index",
  components: { Logo }
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
