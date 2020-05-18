import Vue from "vue"; //Esta importación es necesaria para el router
import Router from "vue-router"; //Esta es la importación de router

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history", //Esto hace que se utilice el history mode de html
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/coin/:id", //para tener valores dinamicos
      name: "coin-detail",
      component: CoinDetail
    },
    {
      path: "*", //para urls que no existen
      name: "error",
      component: Error
    }
  ]
});
