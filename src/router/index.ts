import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Home",
      },
      component: Home,
    },
  ],
});

// export default router
