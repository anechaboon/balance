// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/Home/Index.vue"),
    name: "t.a.home",
    meta: {
      title: "Home",
    },
  },
  {
    path: "/expense",
    component: () => import("@/components/Expense/Index.vue"),
    name: "t.a.home.mobile",
    meta: {
      title: "Expense",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
