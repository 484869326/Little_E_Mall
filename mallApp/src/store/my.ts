import { defineStore } from "pinia";
import { getGoodList } from "@/service/home";
import {
  getMyMutidata,
  getCode,
  verifyCode,
  register,
  login,
  getUserInfo,
  updateUserInfo,
} from "@/service/my";

export const useMyStore = defineStore("my", {
  state: () => {
    return {
      banners: [] as any[],
      goodList: [] as any[],
      userInfo: {} as any,
    };
  },
  getters: {
    isLogin(): boolean {
      return Object.keys(this.userInfo).length !== 0;
    },
    address(): any {
      try {
        const { city, defaultId } = this.userInfo;
        return city[defaultId];
      } catch (e) {
        return null;
      }
    },
    addressRegionText(): string {
      try {
        const { defaultId, city } = this.userInfo;
        return city[defaultId].addressRegionText;
      } catch (e) {
        return "请你选择地址";
      }
    },
  },
  // 修改state里面的数据
  actions: {
    //商品列表
    async fetchGoodList(page: any) {
      const res = (await getGoodList(page)) as any;
      this.goodList = res.data;
    },
    async fetchMyBanner() {
      const res = (await getMyMutidata()) as any;
      this.banners = res.data || [];
    },
    async fetchGetCode(phone: any) {
      return await getCode(phone);
    },
    async fetchVerifyCode(data: any) {
      const { msg } = (await verifyCode(data)) as any;
      //登录成功加载用户信息
      if (msg === "success") {
        //登录成功加载用户信息
        await this.fetchUserInfo({ phone: data.phone });
      }
      return msg;
    },
    async fetchRegister(data: any) {
      const res = (await register(data)) as any;
      //登录成功加载用户信息
      const phone = uni.getStorageSync("phone");
      await this.fetchUserInfo({ phone });
      return res.msg;
    },
    async fetchLogin(data: any) {
      const { msg } = (await login(data)) as any;
      if (msg === "success") {
        //登录成功加载用户信息
        await this.fetchUserInfo({ phone: data.phone });
      }
      return msg;
    },
    async fetchUserInfo(data: any) {
      try {
        const res = (await getUserInfo(data)) as any;
        res.data.city =
          !res.data.city || res.data.city.length === 0 ? [] : JSON.parse(res.data.city);
        this.userInfo = res.data || {};
      } catch {
        //没有此用户信息
        uni.removeStorageSync("isLogin");
        uni.removeStorageSync("phone");
      }
    },
    async fetchUpdateUserInfo(id: any, data: any) {
      const newCity =
        typeof data.city === "string" ? data.city : JSON.stringify(data.city);
      const res = (await updateUserInfo(id, {
        ...data,
        city: newCity,
      })) as any;
      return res.msg;
    },
  },
});
