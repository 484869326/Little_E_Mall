"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (numEdit + drawer)();
}
const drawer = () => "../../../components/drawer.js";
const numEdit = () => "../../../components/num-edit.js";
const _sfc_main = {
  __name: "detail-buy",
  props: ["detail"],
  emits: ["update", "close"],
  setup(__props, { emit }) {
    const props = __props;
    const detail = Object.assign({}, props.detail);
    const data = common_vendor.reactive({
      typeIndex: 0,
      colorIndex: 0,
      num: 1
    });
    common_vendor.watch(data, (newValue) => {
      emit("update", newValue);
    });
    const goodNameCom = common_vendor.computed(() => {
      return detail.Goodname + " " + (detail.Type ?? [])[data.typeIndex] + " " + (detail.color ?? [])[data.colorIndex];
    });
    function handlePreviewImage() {
      common_vendor.index.previewImage({
        current: 0,
        urls: props.detail.Goodimg
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(detail).Goodimg[0],
        b: common_vendor.o(handlePreviewImage),
        c: common_vendor.t((common_vendor.unref(detail).price ?? [])[data.typeIndex]),
        d: common_vendor.t(common_vendor.unref(goodNameCom)),
        e: common_vendor.f(common_vendor.unref(detail).Type, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: data.typeIndex === index ? 1 : "",
            c: common_vendor.o(($event) => data.typeIndex = index, item),
            d: item
          };
        }),
        f: common_vendor.f(common_vendor.unref(detail).color, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: data.colorIndex === index ? 1 : "",
            c: common_vendor.o(($event) => data.colorIndex = index, item),
            d: item
          };
        }),
        g: common_vendor.o(($event) => data.num = $event),
        h: common_vendor.p({
          modelValue: data.num
        }),
        i: common_vendor.o(($event) => _ctx.$emit("close"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-buy.vue"]]);
wx.createComponent(Component);
