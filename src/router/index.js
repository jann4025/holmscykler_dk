import Vue from "vue";
import VueRouter from "vue-router";
import ComingSoon from "../views/ComingSoon";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "comingsoon",
    component: ComingSoon
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
