"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "home-search",
  props: ["color"],
  setup(__props) {
    function handleOpenSearchClick() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "search",
          size: "40rpx",
          color: "#b4b4b4"
        }),
        c: common_vendor.p({
          type: "scan",
          size: "40rpx",
          color: "#b4b4b4"
        }),
        d: common_vendor.o(handleOpenSearchClick),
        e: common_vendor.p({
          type: "chat",
          color: __props.color,
          size: "60rpx"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/home/cpns/home-search.vue"]]);
wx.createComponent(Component);
