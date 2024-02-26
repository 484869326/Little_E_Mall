"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useMyStore = common_vendor.defineStore("my", {
  state: () => {
    return {
      banners: [],
      goodList: []
    };
  },
  // 修改state里面的数据
  actions: {
    //商品列表
    async fetchGoodList(page) {
      const res = await service_home.getGoodList(page);
      this.goodList = res.data;
    },
    async fetchMyBanner() {
      const res = await service_home.getMyMutidata();
      this.banners = res.data || [];
    }
  }
});
exports.useMyStore = useMyStore;
