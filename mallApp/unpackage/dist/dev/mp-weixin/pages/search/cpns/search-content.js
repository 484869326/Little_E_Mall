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
  __name: "search-content",
  emits: ["searchClick", "deleteStorage"],
  setup(__props, { emit }) {
    let iconIndex = 0;
    const range = common_vendor.ref("min");
    const instance = common_vendor.getCurrentInstance();
    const localHistoryList = common_vendor.reactive([]);
    const historyList = common_vendor.computed(() => {
      return localHistoryList;
    });
    const historyListHeight = common_vendor.reactive({
      min: "160rpx",
      max: "0px"
    });
    function handleRemoveStorageClick() {
      common_vendor.index.showModal({
        content: "是否删除全部搜索历史记录",
        success: function(res) {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("SEARCH_HISTORY");
            localHistoryList.length = 0;
            emit("deleteStorage");
          }
        }
      });
    }
    function handleChangeShowClick() {
      const isMin = range.value === "min";
      if (isMin) {
        range.value = "max";
        localHistoryList.splice(iconIndex, 1);
        localHistoryList.push("icon");
      } else {
        range.value = "min";
        localHistoryList.splice(localHistoryList.length - 1, 1);
        localHistoryList.splice(iconIndex, 0, "icon");
      }
    }
    function initDom(isTrue2) {
      if (localHistoryList.length > 0 && isTrue2) {
        common_vendor.index.createSelectorQuery().in(instance).select(".history-list-box").boundingClientRect((data) => {
          const height = data.height;
          historyListHeight.max = height + "px";
        }).exec();
        common_vendor.index.createSelectorQuery().in(instance).selectAll(".history-item").boundingClientRect((data) => {
          let topSet = /* @__PURE__ */ new Set();
          let inserted = 0;
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (!topSet.has(item.top)) {
              topSet.add(item.top);
              inserted++;
              if (inserted === 3) {
                const itemWidth = data[i - 1].width;
                iconIndex = itemWidth < 40 ? i - 1 : i;
                localHistoryList.splice(iconIndex, 0, "icon");
                break;
              }
            }
          }
        }).exec();
      }
    }
    common_vendor.onMounted(() => {
      initDom(true);
    });
    let isTrue = false;
    common_vendor.onHide(() => {
      isTrue = true;
    });
    common_vendor.onShow(() => {
      localHistoryList.length = 0;
      localHistoryList.push(
        ...common_vendor.index.getStorageSync("SEARCH_HISTORY").length === 0 ? [] : common_vendor.index.getStorageSync("SEARCH_HISTORY").split(",")
      );
      setTimeout(() => {
        initDom(isTrue);
      }, 500);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(historyList).length !== 0
      }, common_vendor.unref(historyList).length !== 0 ? {
        b: common_vendor.o(handleRemoveStorageClick),
        c: common_vendor.p({
          type: "trash",
          size: "38rpx",
          color: "black"
        }),
        d: common_vendor.f(common_vendor.unref(historyList), (item, k0, i0) => {
          return common_vendor.e({
            a: item === "icon"
          }, item === "icon" ? {
            b: "d5b379a2-1-" + i0,
            c: common_vendor.p({
              type: range.value === "min" ? "down" : "up",
              size: "30rpx",
              color: "black"
            }),
            d: common_vendor.o(handleChangeShowClick, item)
          } : {
            e: common_vendor.t(item),
            f: common_vendor.o(($event) => _ctx.$emit("searchClick", item), item)
          }, {
            g: item
          });
        }),
        e: historyListHeight[range.value]
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5b379a2"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/search/cpns/search-content.vue"]]);
wx.createComponent(Component);
