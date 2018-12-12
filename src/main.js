import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import global_ from './components/Global.js';


Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.GLOBAL = global_;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");