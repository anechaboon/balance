// Composables
import { createRouter, createWebHistory } from "vue-router";
import Cookies from 'js-cookie'

const routes = [
  {
    path: "/login",
    component: () => import("@/components/Login.vue"),
    name: "Login",
    meta: {
      title: "Login",
    },
  },
  {
    path: "/",
    component: () => import("@/components/Home/Index.vue"),
    name: "t.a.home",
    meta: {
      needsAuth:true,
      title: "Home",
    },
  },
  {
    path: "/income",
    component: () => import("@/components/Income/Index.vue"),
    name: "Income",
    meta: {
      needsAuth:true,
      title: "Income",
    },
  },
  {
    path: "/incomeTransaction",
    component: () => import("@/components/Income/Transactions.vue"),
    name: "Income Transaction",
    meta: {
      needsAuth:true,
      title: "Income Transaction",
    },
  },
  {
    path: "/expense",
    component: () => import("@/components/Expense/Index.vue"),
    name: "Expense",
    meta: {
      needsAuth:true,
      title: "Expense",
    },
  },
  {
    path: "/expenseTransaction",
    component: () => import("@/components/Expense/Transactions.vue"),
    name: "Expense Transaction",
    meta: {
      needsAuth:true,
      title: "Expense Transaction",
    },
  },
  {
    path: "/allTransaction",
    component: () => import("@/components/Transactions/Index.vue"),
    name: "Transactions",
    meta: {
      needsAuth:true,
      title: "Transactions",
    },
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserLoggedIn = Cookies.get('balanceUserId');
  if(to.meta.needsAuth){
    if(isUserLoggedIn != undefined && isUserLoggedIn == true){
      next();
    }else{
      console.log(`log:NOT matched`,);
      next('/login'); // ถ้าไม่ได้เข้าสู่ระบบ ให้ redirect ไปยังหน้า login
    }
  }else{
    next();
  }
});


export default router;
