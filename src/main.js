import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "@/store";
import filters from "./filters";
import Vant from "vant";
import "vant/lib/index.css";

var Language = require('./components/language');

// Demo.lan = Language.English;
// Demo.lan = Language.Chinese;

// import Vconsole from "vconsole";

// if (process.env.NODE_ENV === "development") {
// const vConsole = new Vconsole();
// Vue.use(vConsole);
// }

Vue.use(Vant);
Vue.config.productionTip = false;

Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName]);
});

Vue.prototype.$vant = Vant;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
