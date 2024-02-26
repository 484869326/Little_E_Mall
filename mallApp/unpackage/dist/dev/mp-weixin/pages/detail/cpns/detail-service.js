"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + drawer)();
}
const drawer = () => "../../../components/drawer.js";
const _sfc_main = {
  __name: "detail-service",
  emits: ["close"],
  setup(__props, { emit }) {
    const arr = [
      { title: "小E自营" },
      { title: "小E发货", text: "由小E发货" },
      { title: "7天无理由退货" },
      { title: "7天价格保护" },
      { title: "联系我们", text: "hanli_147@163.com" },
      { title: "手机号", text: "10086111" },
      { title: "作者名字", text: "易小川" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(arr, (item, k0, i0) => {
          return common_vendor.e({
            a: "4e1110a4-1-" + i0 + ",4e1110a4-0",
            b: common_vendor.t(item.title),
            c: item.text
          }, item.text ? {
            d: common_vendor.t(item.text)
          } : {}, {
            e: item.title
          });
        }),
        b: common_vendor.p({
          type: "checkbox-filled",
          color: "#F16729",
          size: "48rpx"
        }),
        c: common_vendor.o(($event) => _ctx.$emit("close"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-service.vue"]]);
wx.createComponent(Component);
