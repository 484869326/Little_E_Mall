import { defineStore } from "pinia";
import { getHomeMutidata, getGoodList } from "@/service/home.js";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: [],
      goodList: [],
    };
  },
  // 修改state里面的数据
  actions: {
    //轮播图，推荐
    async fetchHomeMutidata() {
      const res = await getHomeMutidata();
      this.banners = res.data.banner || [];
      this.recommends = res.data.recommend || [];
    },
    //商品列表
    async fetchGoodList(page) {
      const res = await getGoodList(page);
      this.goodList = res.data;
    },
  },
});
