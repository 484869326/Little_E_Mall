"use strict";
const common_vendor = require("../../common/vendor.js");
const store_search = require("../../store/search.js");
require("../../service/search.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + searchContent + searchGoodList)();
}
const searchContent = () => "./cpns/search-content.js";
const searchGoodList = () => "./cpns/search-good-list.js";
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchStore = store_search.useSearchStore();
    const { searchList } = common_vendor.storeToRefs(searchStore);
    const searchValue = common_vendor.ref("");
    const isSearch = common_vendor.ref(true);
    const searchGoodListRef = common_vendor.ref();
    common_vendor.watch(searchValue, async (newValue) => {
      if (!newValue) {
        searchList.value.length = 0;
        return;
      }
      await searchStore.fetchSearchList(newValue, 1);
    });
    const localHistoryList = common_vendor.index.getStorageSync("SEARCH_HISTORY").length === 0 ? [] : common_vendor.index.getStorageSync("SEARCH_HISTORY").split(",");
    function setLocalStorage(value) {
      const index = localHistoryList.indexOf(value);
      if (index !== -1) {
        localHistoryList.splice(index, 1);
      }
      localHistoryList.unshift(value);
      common_vendor.index.setStorageSync("SEARCH_HISTORY", localHistoryList.join(","));
    }
    async function search() {
      isSearch.value = false;
      setLocalStorage(searchValue.value);
    }
    function handleItemClick(id, value) {
      setLocalStorage(value);
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?goodid=${id}`
      });
      searchValue.value = "";
      searchList.value.length = 0;
    }
    function handleSearchClick(value) {
      setLocalStorage(value);
      isSearch.value = false;
      searchValue.value = value;
    }
    common_vendor.onMounted(() => {
      searchList.value.length = 0;
    });
    common_vendor.onLoad((option) => {
      if (option.searchValue) {
        searchValue.value = option.searchValue;
        setLocalStorage(searchValue.value);
        isSearch.value = false;
      }
    });
    common_vendor.onReachBottom(() => {
      var _a;
      if (searchGoodListRef.value) {
        (_a = searchGoodListRef.value) == null ? void 0 : _a.loadMore();
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(search),
        b: common_vendor.o(($event) => common_vendor.unref(searchList).length = 0),
        c: common_vendor.o(($event) => searchValue.value = $event),
        d: common_vendor.p({
          radius: "100",
          readonly: !isSearch.value,
          cancelButton: "none",
          modelValue: searchValue.value
        }),
        e: isSearch.value
      }, isSearch.value ? {
        f: common_vendor.o(search)
      } : {
        g: common_vendor.t(searchValue.value),
        h: common_vendor.o(($event) => searchValue.value = ""),
        i: common_vendor.p({
          type: "closeempty",
          size: "30rpx",
          color: "#AEAEAE"
        })
      }, {
        j: common_vendor.o(($event) => !isSearch.value && (isSearch.value = true)),
        k: common_vendor.unref(searchList).length !== 0 && isSearch.value
      }, common_vendor.unref(searchList).length !== 0 && isSearch.value ? {
        l: common_vendor.f(common_vendor.unref(searchList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.Goodname),
            b: item.Goodid,
            c: common_vendor.o(($event) => handleItemClick(item.Goodid, item.Goodname), item.Goodid)
          };
        })
      } : {}, {
        m: common_vendor.unref(searchList).length === 0 || !isSearch.value ? "auto" : "100vh",
        n: isSearch.value
      }, isSearch.value ? {
        o: common_vendor.o(handleSearchClick),
        p: common_vendor.o(($event) => common_vendor.unref(localHistoryList).length = 0),
        q: common_vendor.p({
          searchValue: searchValue.value
        })
      } : {
        r: common_vendor.sr(searchGoodListRef, "c10c040c-3", {
          "k": "searchGoodListRef"
        }),
        s: common_vendor.p({
          searchValue: searchValue.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
