"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "category-menu",
  props: ["categories", "currentIndex"],
  emits: ["update:currentIndex"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.categories, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.Cname),
            b: common_vendor.n(__props.currentIndex === item.Cid ? "active" : ""),
            c: common_vendor.o(($event) => _ctx.$emit("update:currentIndex", item.Cid), item.Cid),
            d: item.Cid
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b49732ed"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/category/cpns/category-menu.vue"]]);
wx.createComponent(Component);
