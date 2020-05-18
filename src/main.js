import Vue from "vue"; //Importar la libreria npm
import App from "./App.vue"; //Importar el archivo App.vue
import "@/assets/css/tailwind.css"; //El @ representa el directorio src
import Chartkick from "vue-chartkick"; //Chartckik y VueSpinners se importa diferente, depende de la documentación de cada uno
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filter";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false; //tips de producción

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
