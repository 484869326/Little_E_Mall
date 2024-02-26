"use strict";
const common_vendor = require("../../common/vendor.js");
const store_shopping = require("../../store/shopping.js");
const utils_index = require("../../utils/index.js");
require("../../service/shopping.js");
require("../../service/index.js");
if (!Math) {
  (shoppingContent + shoppingBalance)();
}
const shoppingContent = () => "./cpns/shopping-content.js";
const shoppingBalance = () => "./cpns/shopping-balance.js";
const _sfc_main = {
  __name: "shopping",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "26fafd42": paddingBottom.value
    }));
    const isAllChecked = common_vendor.ref(2);
    const localShoppingList = common_vendor.reactive([]);
    const shoppingStore = store_shopping.useShoppingStore();
    const {
      shoppingList,
      isCheckAll,
      totalCheckPrice,
      totalCheck,
      total,
      totalPrice
    } = common_vendor.storeToRefs(shoppingStore);
    const shoppingBalanceRef = common_vendor.ref();
    const paddingBottom = common_vendor.ref("0px");
    const debounceFn = utils_index.debounce(
      async (fnName, ...args) => {
        const res = await shoppingStore[fnName](...args);
        return res;
      },
      300,
      false
    );
    let page = 1;
    common_vendor.onLoad(async () => {
      await shoppingStore.fetchShoppingList(page);
      await shoppingStore.fetchCheckAll();
      localShoppingList.push(...shoppingList.value);
      paddingBottom.value = await (shoppingBalanceRef.value && shoppingBalanceRef.value.getBalanceHeight());
    });
    function handleChangeCheckedClick(item) {
      const id = item.shoppingid;
      const checked = item.isChecked;
      const price = parseFloat(item.good.price[item.type]).toFixed(2);
      const totalCheckValue = totalCheck.value;
      totalCheckPrice.value = checked ? totalCheckPrice.value + price * item.Num : totalCheckPrice.value - price * item.Num;
      totalCheck.value = checked ? totalCheckValue + 1 : totalCheckValue - 1;
      isAllChecked.value = 2;
      debounceFn("fetchChangeChecked", id, checked).then((res) => {
        isCheckAll.value = res.data;
      });
    }
    function handleChangeNumClick(event, item, index) {
      const id = item.shoppingid;
      const num = item.Num;
      const oldNum = localShoppingList[index].Num;
      const price = parseFloat(item.good.price[item.type]).toFixed(2);
      if (item.isChecked) {
        totalCheckPrice.value = totalCheckPrice.value + price * (num - oldNum);
        localShoppingList[index].Num = num;
      }
      totalPrice.value = totalPrice.value + price * event;
      debounceFn("fetchChangeShoppingNum", id, num);
    }
    function handleCheckAllClick(checkAll) {
      isAllChecked.value = Number(checkAll);
      debounceFn("fetchChangeAllChecked", checkAll);
    }
    function handleDeleteClick(item) {
      const id = item.shoppingid;
      const price = parseFloat(item.good.price[item.type]).toFixed(2) * item.Num;
      total.value = total.value - 1;
      totalCheck.value = totalCheck.value - 1;
      totalPrice.value = totalPrice.value - price;
      if (item.isChecked) {
        totalCheckPrice.value = totalCheckPrice.value - price;
      }
      shoppingStore.fetchDeleteShopping(id);
    }
    common_vendor.onReachBottom(async () => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      await shoppingStore.fetchShoppingList(++page);
      localShoppingList.push(...shoppingList.value);
      setTimeout(() => {
        common_vendor.index.hideLoading();
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleChangeCheckedClick),
        b: common_vendor.o(handleChangeNumClick),
        c: common_vendor.o(handleDeleteClick),
        d: common_vendor.p({
          isAllChecked: isAllChecked.value,
          shoppingList: common_vendor.unref(shoppingList)
        }),
        e: common_vendor.sr(shoppingBalanceRef, "66bacff3-1", {
          "k": "shoppingBalanceRef"
        }),
        f: common_vendor.o(handleCheckAllClick),
        g: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/shopping/shopping.vue"]]);
wx.createPage(MiniProgramPage);
