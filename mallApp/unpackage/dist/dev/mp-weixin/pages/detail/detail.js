"use strict";
const common_vendor = require("../../common/vendor.js");
const store_good = require("../../store/good.js");
require("../../service/good.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (banner + detailBox + _easycom_uni_icons + detailBottom + detailBuy + detailService)();
}
const banner = () => "../../components/banner.js";
const detailBottom = () => "./cpns/detail-bottom.js";
const detailBox = () => "./cpns/detail-box.js";
const detailBuy = () => "./cpns/detail-buy.js";
const detailService = () => "./cpns/detail-service.js";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const goodStore = store_good.useGoodStore();
    const { detail } = common_vendor.storeToRefs(goodStore);
    const detailBottomRef = common_vendor.ref(null);
    const data = common_vendor.reactive({
      typeIndex: 0,
      colorIndex: 0,
      num: 1
    });
    const childName = common_vendor.ref("");
    const paddingBottom = common_vendor.ref(0);
    const selectName = common_vendor.computed(() => {
      const obj = detail.value;
      return obj.Goodname + " " + (obj.color ?? [])[data.colorIndex] + " " + (obj.Type ?? [])[data.typeIndex] + " x" + data.num;
    });
    common_vendor.onLoad(async (option) => {
      common_vendor.index.pageScrollTo({
        scrollTop: 1,
        //距离页面顶部的距离
        duration: 0
        // 滚动动画时长
      });
      await goodStore.fetchGoodDetail(option.goodid);
      detail.value.price = detail.value.price.split(",");
      detail.value.color = detail.value.color.split(",");
      detail.value.Type = detail.value.Type.split(",");
      detail.value.isBuy = true;
      paddingBottom.value = detailBottomRef.value && await detailBottomRef.value.getPaddingBottom();
    });
    function updateData(value) {
      Object.assign(data, value);
    }
    function handleShowBuyClick(isBuy = true) {
      childName.value = "buy";
      detail.value.isBuy = isBuy;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          banners: common_vendor.unref(detail).Swiper,
          isPreview: true
        }),
        b: common_vendor.t((common_vendor.unref(detail).price ?? [])[data.typeIndex]),
        c: common_vendor.t(common_vendor.unref(detail).Goodname),
        d: common_vendor.t(common_vendor.unref(detail).advertise),
        e: common_vendor.p({
          title: "活动"
        }),
        f: common_vendor.t(common_vendor.unref(selectName)),
        g: common_vendor.o(handleShowBuyClick),
        h: common_vendor.p({
          title: "已选"
        }),
        i: common_vendor.p({
          type: "location",
          size: "40rpx",
          color: "#7e7e7e"
        }),
        j: common_vendor.o(($event) => childName.value = "service"),
        k: common_vendor.p({
          title: "配送"
        }),
        l: common_vendor.p({
          type: "checkbox",
          size: "40rpx",
          color: "#7e7e7e"
        }),
        m: common_vendor.p({
          type: "checkbox",
          size: "40rpx",
          color: "#7e7e7e"
        }),
        n: common_vendor.p({
          type: "checkbox",
          size: "40rpx",
          color: "#7e7e7e"
        }),
        o: common_vendor.o(($event) => childName.value = "service"),
        p: common_vendor.p({
          title: "服务"
        }),
        q: common_vendor.f(common_vendor.unref(detail).Detail, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        r: common_vendor.sr(detailBottomRef, "1b5658da-9", {
          "k": "detailBottomRef"
        }),
        s: common_vendor.o(handleShowBuyClick),
        t: childName.value === "buy"
      }, childName.value === "buy" ? {
        v: common_vendor.o(($event) => childName.value = ""),
        w: common_vendor.o(updateData),
        x: common_vendor.p({
          detail: common_vendor.unref(detail)
        })
      } : childName.value === "service" ? {
        z: common_vendor.o(($event) => childName.value = "")
      } : {}, {
        y: childName.value === "service",
        A: paddingBottom.value + "px"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
