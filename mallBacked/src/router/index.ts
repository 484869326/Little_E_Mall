import { createRouter, createWebHashHistory } from "vue-router";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { firstMenu } from "@/router/mapMenus";
import { useLoginStore } from "@/store/login";
import { useTabsStore } from "@/store/tabs";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/HomeView.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/home/cpns/LoginPanel.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/home/cpns/RegisterPanel.vue")
      }
    ],
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const tabStore = useTabsStore();
      const loginStore = useLoginStore();
      if (loginStore.refreshToken && tabStore.currentPath) {
        next(tabStore.currentPath);
        return;
      }
      next();
    }
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/MainView.vue")
  }
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});
//路由守卫
router.beforeEach((to, from) => {
  if (to.path !== "/login" && to.path !== "/register") {
    const loginStore = useLoginStore();
    const token = loginStore.token;
    if (!token) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    if (!from.path.includes("login") && from.matched.length === 0) {
      return from.path;
    }
    return firstMenu?.path;
  }
});
export default router;
