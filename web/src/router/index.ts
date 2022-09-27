import type { RouteRecordRaw } from "vue-router";
import useUserStore from "@/stores/modules/user.store";
import { createRouter, createWebHistory } from "vue-router";
import pinia from "@/stores";

const userStore = useUserStore(pinia);

const Login = () => import("@/pages/Login.vue");
const Home = () => import("@/pages/Home.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    if (!userStore.username) {
      return "/login";
    }
  }
});

export default router;
