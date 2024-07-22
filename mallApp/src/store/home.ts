import { defineStore } from "pinia";
import { getHomeMutidata, getGoodList } from "@/service/home";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      banners: [] as string[],
      recommends: [] as IRequest.ICategory[],
      goodList: [] as IRequest.IGood[],
    };
  },
  // 修改state里面的数据
  actions: {
    //轮播图，推荐
    async fetchHomeMutidata() {
      const res = await getHomeMutidata();
      this.banners = res.data ? res.data.banner : [];
      this.recommends = res.data ? res.data.recommend : [];
    },
    //商品列表
    async fetchGoodList(page: number) {
      const res = await getGoodList(page);
      this.goodList = res.data || [];
    },
  },
});
