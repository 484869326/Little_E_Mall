"use strict";
const common_vendor = require("../../common/vendor.js");
const store_category = require("../../store/category.js");
require("../../service/category.js");
require("../../service/index.js");
if (!Math) {
  (categoryMenu + categoryContent)();
}
const categoryMenu = () => "./cpns/category-menu.js";
const categoryContent = () => "./cpns/category-content.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const categoryStore = store_category.useCategoryStore();
    const { categoryList, subCategory } = common_vendor.storeToRefs(categoryStore);
    const parentID = common_vendor.ref(0);
    common_vendor.onLoad(async () => {
      await categoryStore.fetchCategoryList();
      parentID.value = categoryList.value[0].Cid;
    });
    const scrollTop = common_vendor.ref(0);
    common_vendor.watch(parentID, () => {
      console.log(scrollTop.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => parentID.value = $event),
        b: common_vendor.p({
          categories: common_vendor.unref(categoryList),
          currentIndex: parentID.value
        }),
        c: common_vendor.p({
          subCategory: common_vendor.unref(subCategory),
          parentID: parentID.value
        }),
        d: scrollTop.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
