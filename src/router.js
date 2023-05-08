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
      path: "/auth",
      name: "Auth",
      meta: { requiresUnAuth: true },
      component: () => import("./views/auth/UserAuth.vue"),
    },
    {
      path: "/:notFound(.*)",
      component: () => import("./views/NotFound.vue"),
    },
  ],
});

// router.beforeEach((to, _, next) => {
//   if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
//     console.log("requiresUnAuth");
//     next("/");
//   }
// });

export default router;
