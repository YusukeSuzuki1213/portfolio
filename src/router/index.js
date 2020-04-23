import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top
  },
  {
    path: "/cv",
    name: "cv",
    component: () => import("@/views/Cv.vue")
  },
  {
    path: "/works",
    name: "works",
    component: () => import("@/views/Works.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
