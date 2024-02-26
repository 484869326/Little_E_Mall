"use strict";
const common_vendor = require("../common/vendor.js");
const service_category = require("../service/category.js");
const useCategoryStore = common_vendor.defineStore("category", {
  state: () => {
    return {
      categoryList: [],
      subCategory: []
    };
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchCategoryList() {
      const res = await service_category.getCategoryList();
      this.categoryList = res.data || [];
      this.subCategory = this.categoryList.flatMap((item) => item.children);
    }
  }
});
exports.useCategoryStore = useCategoryStore;
