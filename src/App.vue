<template>
  <div id="app">
    <PartialHeader></PartialHeader>
    <router-view />
    <PartialFooter></PartialFooter>
  </div>
</template>

<script>
import PartialHeader from "./components/partials/PartialHeader";
import PartialFooter from "@/components/partials/PartialFooter";
export default {
  name: "App",
  components: {
    PartialHeader,
    PartialFooter,
  },
};
</script>

<style lang="scss">
@import "../src/assets/sass/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
