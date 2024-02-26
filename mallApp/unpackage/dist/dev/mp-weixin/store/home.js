"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: [],
      goodList: []
    };
  },
  // 修改state里面的数据
  actions: {
    //轮播图，推荐
    async fetchHomeMutidata() {
      const res = await service_home.getHomeMutidata();
      this.banners = res.data.banner || [];
      this.recommends = res.data.recommend || [];
    },
    //商品列表
    async fetchGoodList(page) {
      const res = await service_home.getGoodList(page);
      this.goodList = res.data;
    }
  }
});
exports.useHomeStore = useHomeStore;
