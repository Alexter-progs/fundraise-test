<template>
  <div id="app">
    <DonationForm/>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Inject, Vue, PropSync } from "vue-property-decorator";
import DonationForm from "./components/DonationForm.vue";

@Component({
  components: {
    DonationForm
  }
})
export default class App extends Vue {
}
</script>

<style lang="less">
#app {
  font-family: "Lato", Helvetica Neue, Helvetica, Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
</style>
