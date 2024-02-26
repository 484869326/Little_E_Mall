"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "banner",
  props: ["banners", "isPreview"],
  setup(__props, { expose }) {
    const props = __props;
    const instance = common_vendor.getCurrentInstance();
    const autoplay = common_vendor.ref(true);
    const swiperHeight = common_vendor.ref("150px");
    function setSwiperHeight() {
      common_vendor.index.createSelectorQuery().in(instance).select(".image").boundingClientRect((data) => {
        swiperHeight.value = data.height + "px";
      }).exec();
    }
    function getSwiperHeight() {
      return swiperHeight.value;
    }
    function handlePreviewImage(index) {
      if (!props.isPreview)
        return;
      common_vendor.index.previewImage({
        current: index,
        urls: props.banners
      });
    }
    expose({
      getSwiperHeight
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => index === 0 && _ctx.$nextTick(setSwiperHeight), item),
            c: common_vendor.o(($event) => handlePreviewImage(index), item),
            d: item
          };
        }),
        b: autoplay.value,
        c: swiperHeight.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/components/banner.vue"]]);
wx.createComponent(Component);
