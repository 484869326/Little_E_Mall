"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: ["recommends"],
  setup(__props) {
    function handleClick(searchValue) {
      common_vendor.index.navigateTo({
        url: "/pages/search/search?searchValue=" + searchValue
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommends, (item, k0, i0) => {
          return {
            a: item.Cimg,
            b: common_vendor.t(item.Cname),
            c: item.Cid,
            d: common_vendor.o(($event) => handleClick(item.Cname), item.Cid)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/home/cpns/home-recommend.vue"]]);
wx.createComponent(Component);
