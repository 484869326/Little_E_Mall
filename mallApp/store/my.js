import { defineStore } from "pinia";
import { getGoodList } from "@/service/home.js";
import {
  getMyMutidata,
  getCode,
  verifyCode,
  register,
  login,
  getUserInfo,
  updateUserInfo,
} from "@/service/my.js";

export const useMyStore = defineStore("my", {
  state: () => {
    return {
      banners: [],
      goodList: [],
      userInfo: {},
    };
  },
  getters: {
    isLogin() {
      return Object.keys(this.userInfo).length !== 0;
    },
    address() {
      try {
        const { city, defaultId } = this.userInfo;
        return city[defaultId];
      } catch (e) {
        return null;
      }
    },
    addressRegionText() {
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
    async fetchGoodList(page) {
      const res = await getGoodList(page);
      this.goodList = res.data;
    },
    async fetchMyBanner() {
      const res = await getMyMutidata();
      this.banners = res.data || [];
    },
    async fetchGetCode(phone) {
      return await getCode(phone);
    },
    async fetchVerifyCode(data) {
      const { msg } = await verifyCode(data);
      //登录成功加载用户信息
      if (msg === "success") {
        //登录成功加载用户信息
        await this.fetchUserInfo({ phone: data.phone });
      }
      return msg;
    },
    async fetchRegister(data) {
      const res = await register(data);
      //登录成功加载用户信息
      const phone = uni.getStorageSync("phone");
      await this.fetchUserInfo({ phone });
      return res.msg;
    },
    async fetchLogin(data) {
      const { msg } = await login(data);
      if (msg === "success") {
        //登录成功加载用户信息
        await this.fetchUserInfo({ phone: data.phone });
      }
      return msg;
    },
    async fetchUserInfo(data) {
      const res = await getUserInfo(data);
      res.data.city =
        !res.data.city || res.data.city.length === 0
          ? []
          : JSON.parse(res.data.city);
      this.userInfo = res.data || {};
    },
    async fetchUpdateUserInfo(id, data) {
      const newCity =
        typeof data.city === "string" ? data.city : JSON.stringify(data.city);
      const res = await updateUserInfo(id, {
        ...data,
        city: newCity,
      });
      return res.msg;
    },
  },
});
