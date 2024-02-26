"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_index = require("../../../utils/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + numEdit)();
}
const numEdit = () => "../../../components/num-edit.js";
const _sfc_main = {
  __name: "shopping-content",
  props: ["shoppingList", "isAllChecked"],
  emits: ["changeNum", "delete", "changeChecked"],
  setup(__props, { emit }) {
    const props = __props;
    const instance = common_vendor.getCurrentInstance();
    const shoppingList = common_vendor.reactive([]);
    common_vendor.watch(
      () => props.shoppingList,
      (newVal) => {
        const data = utils_index.deepClone(newVal);
        data.forEach((item) => {
          item.good.price = item.good.price.split(",");
          item.good.Type = item.good.Type.split(",");
          item.good.color = item.good.color.split(",");
          shoppingList.push(item);
        });
      }
    );
    common_vendor.watch(
      () => props.isAllChecked,
      (newVal) => {
        if (newVal === 2)
          return;
        shoppingList.forEach((item) => {
          item.isChecked = newVal;
        });
      },
      {
        immediate: true
      }
    );
    let startX = 0, lastX = 0, elementPosition = 0;
    const endX = common_vendor.reactive([]);
    function handleTouchStart(e, index) {
      endX[index] = endX[index] ?? 0;
      startX = e.changedTouches[0].clientX - endX[index];
      if (elementPosition === 0) {
        getElementPosition();
      }
    }
    function handleTouchMove(e, index) {
      lastX = e.changedTouches[0].clientX;
      const disX = lastX - startX;
      if (disX < elementPosition - 40)
        return;
      if (disX > 0 && disX > elementPosition)
        return;
      endX[index] = disX;
    }
    function handleTouchEnd(e, index) {
      const threshold = elementPosition / 2;
      if (endX[index] > threshold) {
        endX[index] = 0;
      } else if (endX[index] && endX[index] !== 0) {
        endX[index] = elementPosition;
      }
      startX = 0;
      lastX = 0;
    }
    function getElementPosition() {
      common_vendor.index.createSelectorQuery().in(instance).select(".option").boundingClientRect((data) => {
        elementPosition = -(data.right - data.left);
      }).exec();
    }
    function handleChangeCheckedClick(item) {
      item.isChecked = !item.isChecked;
      emit("changeChecked", item);
    }
    function handleDeleteClick(item, index) {
      common_vendor.index.showModal({
        title: "",
        content: "是否删除",
        success: function(res) {
          if (res.confirm) {
            emit("delete", item);
            endX.splice(index, 1);
            shoppingList.splice(index, 1);
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(shoppingList, (item, index, i0) => {
          return {
            a: "20bf4f16-0-" + i0,
            b: common_vendor.p({
              type: item.isChecked ? "checkbox-filled" : "circle",
              size: "48rpx",
              color: item.isChecked ? "#f3402b" : "#7e7e7e"
            }),
            c: common_vendor.o(($event) => handleChangeCheckedClick(item), item.shoppingid),
            d: item.good.Goodimg,
            e: common_vendor.t(item.good.Goodname),
            f: common_vendor.t(item.good.Type[item.type] + " " + item.good.color[item.color]),
            g: "20bf4f16-1-" + i0,
            h: common_vendor.t(item.good.price[item.type]),
            i: common_vendor.o(($event) => _ctx.$emit("changeNum", $event, item, index), item.shoppingid),
            j: "20bf4f16-2-" + i0,
            k: common_vendor.o(($event) => item.Num = $event, item.shoppingid),
            l: common_vendor.p({
              modelValue: item.Num
            }),
            m: common_vendor.o(($event) => handleDeleteClick(item, index), item.shoppingid),
            n: common_vendor.s(`transform: translateX(${endX[index]}px)`),
            o: common_vendor.o(($event) => handleTouchStart($event, index), item.shoppingid),
            p: common_vendor.o(($event) => handleTouchMove($event, index), item.shoppingid),
            q: common_vendor.o(($event) => handleTouchEnd($event, index), item.shoppingid),
            r: item.shoppingid
          };
        }),
        b: common_vendor.p({
          type: "down",
          size: "28rpx",
          color: "#7e7e7e"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20bf4f16"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/shopping/cpns/shopping-content.vue"]]);
wx.createComponent(Component);
