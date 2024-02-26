import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ordernow from "../views/ordernow.vue"
import aboutus from "../views/About.vue"
import orderfood from "../views/orderfood.vue"
import findus from "../views/findus.vue"
import login from "../views/login.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:'/ordernow',
    name:'order',
    component:ordernow
  },
  {
    path:'/orderfood',
    name:'order',
    component:orderfood
  },
  {
    path:'/aboutus',
    name:'order',
    component:aboutus
  },
  {
    path:'/findus',
    name:'order',
    component:findus
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
];

const router = new VueRouter({
  routes,
});

export default router;
