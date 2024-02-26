"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _component_categoryContent = common_vendor.resolveComponent("categoryContent");
  _component_categoryContent();
}
const _sfc_main = {
  __name: "category-content",
  props: ["subCategory", "parentID"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.subCategory, (item, index, i0) => {
          return common_vendor.e({
            a: item.level !== 1 || item.parentID === Number(__props.parentID)
          }, item.level !== 1 || item.parentID === Number(__props.parentID) ? common_vendor.e({
            b: item.Cimg
          }, item.Cimg ? {
            c: item.Cimg,
            d: common_vendor.t(item.Cname)
          } : item.Cname ? {
            f: common_vendor.t(item.Cname)
          } : {}, {
            e: item.Cname,
            g: item.children && item.children.length !== 0
          }, item.children && item.children.length !== 0 ? {
            h: "a62664f5-0-" + i0,
            i: common_vendor.p({
              subCategory: item.children
            })
          } : {}) : {}, {
            j: item.Cid
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a62664f5"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/category/cpns/category-content.vue"]]);
wx.createComponent(Component);
