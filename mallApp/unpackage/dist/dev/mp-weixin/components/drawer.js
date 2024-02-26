"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "drawer",
  emits: ["close"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => _ctx.$emit("close")),
        b: common_vendor.p({
          type: "clear",
          size: "38rpx",
          color: "#7e7e7e"
        }),
        c: common_vendor.o(($event) => _ctx.$emit("close"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/components/drawer.vue"]]);
wx.createComponent(Component);
