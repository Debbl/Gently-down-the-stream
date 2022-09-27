import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("@/pages/Login.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
