import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import 'vue-class-component/hooks';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
