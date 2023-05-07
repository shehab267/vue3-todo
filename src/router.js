import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      name: "Home",
      component: import("./views/Home.vue"),
    },
  ],
});

export default router;
