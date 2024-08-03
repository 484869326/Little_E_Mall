import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { firstMenu } from "@/router/mapMenus";
import { useLoginStore } from "@/store/login";

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
  }
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});
//路由守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
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
