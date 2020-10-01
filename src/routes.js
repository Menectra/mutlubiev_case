import Vue from "vue";
import VueRouter from "vue-router";
import Loginn from "./components/loginn";
import Anasayfa from "./components/Anasayfa";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/login",
      component: Loginn,
    },
    {
      path: "/",
      component: Anasayfa,
    },
  ],
});
