"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
const utils_index = require("../../utils/index.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (homeSearch + banner + _easycom_uni_icons + homeRecommend + waterFallGood)();
}
const banner = () => "../../components/banner.js";
const homeSearch = () => "./cpns/home-search.js";
const homeRecommend = () => "./cpns/home-recommend.js";
const waterFallGood = () => "../../components/water-fall-good.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "392f7986": homeSearchBg.value
    }));
    const homeStore = store_home.useHomeStore();
    const homeBannerRef = common_vendor.ref(null);
    const { banners, recommends, goodList } = common_vendor.storeToRefs(homeStore);
    const homeSearchBg = common_vendor.ref("transpant");
    const homeSearchColor = common_vendor.ref("#ffffff");
    const waterFallGoodRef = common_vendor.ref(null);
    let page = 1;
    common_vendor.onLoad(async () => {
      await homeStore.fetchHomeMutidata();
      await homeStore.fetchGoodList(page);
      await (waterFallGoodRef.value && waterFallGoodRef.value.initValue());
    });
    const qualificationsList = [
      {
        icon: "shop",
        text: "官方商城"
      },
      {
        icon: "hand-up-filled",
        text: "售后无忧"
      },
      {
        icon: "auth-filled",
        text: "资质证照"
      }
    ];
    common_vendor.onReachBottom(async () => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      await homeStore.fetchGoodList(++page);
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 1e3);
    });
    const throttleOnPageScroll = utils_index.throttle(
      (e) => {
        const swiperHeight = homeBannerRef.value && homeBannerRef.value.getSwiperHeight();
        const scrollTop = e.scrollTop;
        if (scrollTop >= parseInt(swiperHeight) - 20) {
          homeSearchBg.value = "#fff";
          homeSearchColor.value = "#f3402b";
        } else {
          homeSearchBg.value = "transpant";
          homeSearchColor.value = "#ffffff";
        }
      },
      500,
      { leading: false, trailing: true }
    );
    common_vendor.onPageScroll(throttleOnPageScroll);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: homeSearchColor.value
        }),
        b: common_vendor.sr(homeBannerRef, "460b4c5a-1", {
          "k": "homeBannerRef"
        }),
        c: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        d: common_vendor.f(qualificationsList, (item, k0, i0) => {
          return {
            a: "460b4c5a-2-" + i0,
            b: common_vendor.p({
              type: item.icon,
              color: "#F3402B",
              size: "50rpx"
            }),
            c: common_vendor.t(item.text),
            d: item.icon
          };
        }),
        e: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        f: common_vendor.sr(waterFallGoodRef, "460b4c5a-4", {
          "k": "waterFallGoodRef"
        }),
        g: common_vendor.p({
          title: "精选推荐",
          goodList: common_vendor.unref(goodList)
        }),
        h: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
