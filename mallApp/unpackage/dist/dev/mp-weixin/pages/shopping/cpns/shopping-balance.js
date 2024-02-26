"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_shopping = require("../../../store/shopping.js");
require("../../../service/shopping.js");
require("../../../service/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "shopping-balance",
  emits: ["checkAll"],
  setup(__props, { expose, emit }) {
    const instance = common_vendor.getCurrentInstance();
    const shoppingStore = store_shopping.useShoppingStore();
    const { isCheckAll, totalPrice, totalCheckPrice, totalCheck, total } = common_vendor.storeToRefs(shoppingStore);
    function handleCheckAllClick() {
      const isCheckAllValue = !isCheckAll.value;
      isCheckAll.value = isCheckAllValue;
      totalCheckPrice.value = isCheckAllValue ? totalPrice.value : 0;
      totalCheck.value = isCheckAllValue ? total.value : 0;
      emit("checkAll", isCheckAllValue);
    }
    function getBalanceHeight() {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(instance).select(".shopping-balance").boundingClientRect((data) => {
          resolve(data.height + "px");
        }).exec();
      });
    }
    expose({
      getBalanceHeight
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleCheckAllClick),
        b: common_vendor.p({
          type: common_vendor.unref(isCheckAll) ? "checkbox-filled" : "circle",
          size: "48rpx",
          color: common_vendor.unref(isCheckAll) ? "#f3402b" : "#7e7e7e"
        }),
        c: common_vendor.t(common_vendor.unref(totalCheckPrice)),
        d: common_vendor.t(common_vendor.unref(totalCheck)),
        e: common_vendor.unref(totalCheck) === 0
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3eb671dc"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/shopping/cpns/shopping-balance.vue"]]);
wx.createComponent(Component);
