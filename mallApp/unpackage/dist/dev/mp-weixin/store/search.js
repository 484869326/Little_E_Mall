"use strict";
const common_vendor = require("../common/vendor.js");
const service_search = require("../service/search.js");
const useSearchStore = common_vendor.defineStore("search", {
  state: () => {
    return {
      searchList: []
    };
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchSearchList(GoodName, page) {
      const res = await service_search.getSearchList(GoodName, page);
      this.searchList = res.data || [];
    }
  }
});
exports.useSearchStore = useSearchStore;
