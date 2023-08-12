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
    path: "/income",
    component: () => import("@/components/Income/Index.vue"),
    name: "Income",
    meta: {
      title: "Income",
    },
  },
  {
    path: "/incomeTransaction",
    component: () => import("@/components/Income/Transactions.vue"),
    name: "Income Transaction",
    meta: {
      title: "Income Transaction",
    },
  },
  {
    path: "/expense",
    component: () => import("@/components/Expense/Index.vue"),
    name: "Expense",
    meta: {
      title: "Expense",
    },
  },
  {
    path: "/expenseTransaction",
    component: () => import("@/components/Expense/Transactions.vue"),
    name: "Expense Transaction",
    meta: {
      title: "Expense Transaction",
    },
  },
  {
    path: "/allTransaction",
    component: () => import("@/components/Transactions/Index.vue"),
    name: "Transactions",
    meta: {
      title: "Transactions",
    },
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
