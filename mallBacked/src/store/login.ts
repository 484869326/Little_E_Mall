import { defineStore } from "pinia";
import router from "@/router";
import { loginRequest, logout, menuRequest } from "@/service/login";
import { mapMenusToPermissions, mapMenusToRouter } from "@/router/mapMenus";
import type { IMenu } from "@/types/login";
import type { IAdmin } from "@/types/main";
import { useTabsStore } from "./tabs";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      getMenu: [] as IMenu[],
      permissionsList: [] as any[],
      token: "",
      refreshToken: "",
      userInfo: {} as IAdmin
    };
  },
  actions: {
    //登录的
    async loginAction(payload: any) {
      try {
        //保证之前登录的就会退出
        this.refreshToken && (await logout());
      } finally {
        const { data } = await loginRequest(payload);
        this.userInfo = data;
        await this.getAllRoute();
        useTabsStore().$reset();
        ElMessage.success("登录成功！");
      }
    },
    //动态加载菜单
    async getAllRoute() {
      return new Promise(async (resolve) => {
        const { data: getMenu } = await menuRequest();
        this.getMenu = getMenu;
        const routes = mapMenusToRouter(this.getMenu);
        routes.forEach((route) => {
          router.addRoute("main", route);
        });
        router.addRoute({
          path: "/:pathMatch(.*)*",
          name: "NotFound",
          component: () => import("@/views/not-found/NotFound.vue")
        });
        ElMessage.closeAll();
        router.push("/main");
        this.permissionsList = mapMenusToPermissions(this.getMenu);
        resolve(true);
      });
    },
    async reset() {
      this.$reset();
      useTabsStore().$reset();
      router.push("/");
    },
    //退出登录
    async logoutAction() {
	try{
	await logout();
	}finally{
	await this.reset();
      ElMessage.success("退出登录成功！");
	}
    }
  }
});
