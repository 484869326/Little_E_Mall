import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LocalCache from "@/utils/cache";
import { firstMenu } from "@/router/mapMenus";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginView.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/MainView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/not-found/NotFound.vue")
  }
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});
//路由守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const userinfo = LocalCache.getCache("userinfo");
    if (!userinfo) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    return firstMenu.path;
  }
});
export default router;
