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
    {
      path: "/:notFound(.*)",
      component: import("./views/NotFound.vue"),
    },
  ],
});

export default router;
