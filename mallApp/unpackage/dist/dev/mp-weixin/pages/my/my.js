"use strict";
const common_vendor = require("../../common/vendor.js");
const store_my = require("../../store/my.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + banner + waterFallGood)();
}
const banner = () => "../../components/banner.js";
const waterFallGood = () => "../../components/water-fall-good.js";
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const waterFallGoodRef = common_vendor.ref();
    const myStore = store_my.useMyStore();
    const { banners, goodList } = common_vendor.storeToRefs(myStore);
    const headList = {
      imgSrc: "../../static/user.png",
      navigator: "登录/注册",
      icon: true
    };
    const loveList = [{ text: "收藏" }, { text: "足迹" }, { text: "关注" }];
    const orderFormList = [
      {
        icon: "wallet",
        text: "待付款"
      },
      {
        icon: "paperplane",
        text: "待收货"
      },
      {
        icon: "chat",
        text: "待评价"
      },
      {
        icon: "help",
        text: "退换/售后"
      },
      {
        icon: "calendar",
        text: "全部订单"
      }
    ];
    const serviceList = [
      {
        imgSrc: "../../static/service/vip.png",
        text: "会员中心"
      },
      {
        imgSrc: "../../static/service/cheap.png",
        text: "我的优惠"
      },
      {
        imgSrc: "../../static/service/centre.png",
        text: "服务中心"
      },
      {
        imgSrc: "../../static/service/shop.png",
        text: "小E商城"
      },
      {
        imgSrc: "../../static/service/f.png",
        text: "我的F码"
      },
      {
        imgSrc: "../../static/service/setting.png",
        text: "设置"
      }
    ];
    let page = 1;
    common_vendor.onLoad(async () => {
      await myStore.fetchMyBanner();
      await myStore.fetchGoodList(page);
      await (waterFallGoodRef.value && waterFallGoodRef.value.initValue());
    });
    common_vendor.onReachBottom(async () => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      await myStore.fetchGoodList(++page);
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 1e3);
    });
    function handleLoginClick() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: headList.imgSrc,
        b: common_vendor.t(headList.navigator),
        c: headList.icon
      }, {
        d: common_vendor.p({
          type: "right",
          color: "#393939",
          size: "30rpx"
        })
      }, {
        e: common_vendor.o(handleLoginClick),
        f: common_vendor.f(loveList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.text
          };
        }),
        g: common_vendor.f(orderFormList, (item, k0, i0) => {
          return common_vendor.e({
            a: "40355cb3-1-" + i0,
            b: common_vendor.p({
              type: item.icon,
              color: "black",
              size: "60rpx"
            })
          }, {
            c: common_vendor.t(item.text),
            d: item.text
          });
        }),
        h: headList.icon,
        i: common_vendor.f(serviceList, (item, k0, i0) => {
          return {
            a: item.imgSrc,
            b: common_vendor.t(item.text),
            c: item.text
          };
        }),
        j: common_vendor.sr("homeBannerRef", "40355cb3-2"),
        k: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        l: common_vendor.sr(waterFallGoodRef, "40355cb3-3", {
          "k": "waterFallGoodRef"
        }),
        m: common_vendor.p({
          title: "为你精选",
          goodList: common_vendor.unref(goodList)
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
