import { defineStore } from "pinia";
import router from "@/router";

import type { IUser, IMenu } from "@/types/login";
import { loginRequest, menuRequest } from "@/service/login";
import LocalCache from "@/utils/cache";
import { mapMenusToRouter } from "@/utils/mapMenus";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      getMenu: [] as IMenu[],
      userInfo: {} as IUser
    };
  },
  actions: {
    //登录的
    async loginAction(payload: any) {
      try {
        const { data: userInfo } = await loginRequest(payload);
        if (userInfo) {
          const { data: getMenu } = await menuRequest();
          this.userInfo = userInfo;
          this.getMenu = getMenu;
          LocalCache.setCache("userinfo", userInfo);
          LocalCache.setCache("getMenu", getMenu);
          ElMessage.success("登录成功！");
          await this.getAllRoute();
        } else {
          ElMessage.error("账号密码错误，请重新输入");
        }
      } catch (error) {
        ElMessage.error("api接口出错");
      }
    },
    //重新加载用户信息
    async loadUserInfoAction() {
      const userinfo = LocalCache.getCache("userinfo");
      const getMenu = LocalCache.getCache("getMenu");
      this.userInfo = userinfo ?? {};
      this.getMenu = getMenu ?? [];
      await this.getAllRoute();
    },
    //动态加载菜单
    async getAllRoute() {
      return new Promise((resolve) => {
        const routes = mapMenusToRouter(this.getMenu);
        routes.forEach((route) => {
          router.addRoute("main", route);
        });
        ElMessage.closeAll();
        router.push("/main");
        resolve(true);
      });
    }
  }
});
