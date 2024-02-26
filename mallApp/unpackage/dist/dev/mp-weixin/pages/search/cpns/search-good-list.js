"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_search = require("../../../store/search.js");
require("../../../service/search.js");
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
  __name: "search-good-list",
  props: ["searchValue"],
  setup(__props, { expose }) {
    const props = __props;
    const searchStore = store_search.useSearchStore();
    const { searchList } = common_vendor.storeToRefs(searchStore);
    const localSearchList = common_vendor.reactive([]);
    common_vendor.watch(
      searchList,
      (newValue) => {
        if (newValue.length > 0) {
          localSearchList.push(...newValue);
        }
      },
      { immediate: true }
    );
    let page = 1;
    const tabControllIndex = common_vendor.ref(0);
    const tabList = [
      {
        field: "comprehensive",
        text: "综合",
        isSort: false
      },
      {
        field: "salesVolume",
        text: "销量",
        isSort: false
      },
      {
        field: "price",
        text: "价格",
        isSort: true
      },
      {
        field: "newProductPriority",
        text: "新品优先",
        isSort: false
      },
      {
        field: "screen",
        text: "筛选",
        isSort: false
      }
    ];
    function handleGoToDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?goodid=${id}`
      });
    }
    async function loadMore() {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      page++;
      await searchStore.fetchSearchList(props.searchValue, page);
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 1e3);
    }
    expose({
      loadMore
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(tabList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.text),
            b: item.isSort
          }, item.isSort ? {
            c: "45e1ae48-0-" + i0,
            d: common_vendor.p({
              type: "up",
              size: "24rpx",
              color: tabControllIndex.value === index ? "#f3402b" : "#7e7e7e"
            })
          } : {}, {
            e: index === tabControllIndex.value ? 1 : "",
            f: common_vendor.o(($event) => tabControllIndex.value = index, item.field),
            g: item.field
          });
        }),
        b: localSearchList.length !== 0
      }, localSearchList.length !== 0 ? {
        c: common_vendor.f(localSearchList, (item, k0, i0) => {
          return {
            a: item.Goodimg,
            b: common_vendor.t(item.Goodname),
            c: common_vendor.t(item.advertise),
            d: common_vendor.t(item.Explain.replace(/,/g, " | ")),
            e: common_vendor.t(item.price.split(",")[0]),
            f: item.Goodid,
            g: common_vendor.o(($event) => handleGoToDetail(item.Goodid), item.Goodid)
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45e1ae48"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/search/cpns/search-good-list.vue"]]);
wx.createComponent(Component);
