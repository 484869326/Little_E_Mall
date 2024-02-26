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
  __name: "num-edit",
  props: {
    modelValue: { type: Number, default: 1 }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const numValue = common_vendor.ref(props.modelValue);
    common_vendor.watch(
      () => props.modelValue,
      (newValue) => {
        numValue.value = newValue;
      }
    );
    function handleReduceClick() {
      if (numValue.value > 1) {
        emit("update:modelValue", numValue.value - 1);
        emit("change", -1);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: numValue.value <= 1 ? "#B3B3B3" : "black",
        b: common_vendor.o(handleReduceClick),
        c: common_vendor.t(numValue.value),
        d: common_vendor.o(($event) => {
          _ctx.$emit("update:modelValue", numValue.value + 1);
          emit("change", 1);
        }),
        e: common_vendor.p({
          type: "plusempty",
          size: "40rpx",
          color: "black"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/components/num-edit.vue"]]);
wx.createComponent(Component);
