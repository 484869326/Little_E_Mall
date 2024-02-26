"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "detail-bottom",
  emits: ["add"],
  setup(__props, { expose }) {
    const instance = common_vendor.getCurrentInstance();
    const goodIdArr = common_vendor.index.getStorageSync("GOOD_ID") === 0 ? [] : common_vendor.index.getStorageSync("GOOD_ID").split(",");
    const goodid = common_vendor.ref(0);
    const iconArr = common_vendor.reactive([
      {
        type: "chatboxes",
        text: "客服",
        click: () => {
          console.log("客服");
        }
      },
      {
        type: "star",
        text: "收藏",
        click: () => {
          if (goodIdArr.includes(goodid.value)) {
            goodIdArr.splice(goodIdArr.indexOf(goodid.value), 1);
            common_vendor.index.setStorageSync("GOOD_ID", goodIdArr.join(","));
            iconArr[1].type = "star";
          } else {
            goodIdArr.push(goodid.value);
            common_vendor.index.setStorageSync("GOOD_ID", goodIdArr.join(","));
            iconArr[1].type = "star-filled";
          }
        }
      },
      {
        type: "shop",
        text: "购物车",
        click: () => {
          console.log("购物车");
        }
      }
    ]);
    common_vendor.onLoad((option) => {
      goodid.value = option.goodid;
      if (goodIdArr.includes(option.goodid)) {
        iconArr[1].type = "star-filled";
      }
    });
    function getPaddingBottom() {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(instance).select(".detail-bottom").boundingClientRect(function(res) {
          resolve(res.height);
        }).exec();
      });
    }
    expose({
      getPaddingBottom
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(iconArr, (item, k0, i0) => {
          return {
            a: "381fa2e8-0-" + i0,
            b: common_vendor.p({
              type: item.type,
              size: "56rpx",
              color: "#060606"
            }),
            c: common_vendor.t(item.text),
            d: common_vendor.o(item.click, item.text),
            e: item.text
          };
        }),
        b: common_vendor.o(($event) => _ctx.$emit("add", false)),
        c: common_vendor.o(($event) => _ctx.$emit("add"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-bottom.vue"]]);
wx.createComponent(Component);
