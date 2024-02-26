"use strict";
const common_vendor = require("../common/vendor.js");
const utils_index = require("../utils/index.js");
const _sfc_main = {
  __name: "water-fall-good",
  props: ["title", "goodList"],
  emits: ["itemClick"],
  setup(__props, { expose }) {
    const props = __props;
    const goodList = common_vendor.reactive([]);
    const instance = common_vendor.getCurrentInstance();
    common_vendor.watch(
      () => props.goodList,
      (newVal) => {
        goodList.push(...utils_index.deepClone(newVal));
      }
    );
    const heightArr = common_vendor.ref([0]);
    let remainingSpace = 0;
    const updateLayout = async (item, index) => {
      const heightArrValue = heightArr.value;
      const itemWidth = item.width;
      const minIndex = heightArrValue.indexOf(Math.min(...heightArrValue));
      const y = heightArrValue[minIndex];
      const minIndexWidth = minIndex * itemWidth;
      const x = (minIndex + 1) % 2 !== 0 ? minIndexWidth + remainingSpace : minIndexWidth + remainingSpace * 2;
      goodList[index].x = x + "px";
      goodList[index].y = y + "px";
      heightArrValue[minIndex] += item.height + 15;
    };
    function loadImage(el) {
      const index = el.target.dataset.index;
      queryElement(index);
    }
    async function queryElement(index) {
      await new Promise((resolve, reject) => {
        common_vendor.index.createSelectorQuery().in(instance).select(`#good-item-${index}`).boundingClientRect(async function(res) {
          await updateLayout(res, index);
          resolve();
        }).exec();
      });
    }
    function initValue() {
      new Promise((resolve, reject) => {
        let parentWidth = 0;
        common_vendor.index.createSelectorQuery().in(instance).select(".water-fall-good").boundingClientRect(function(res) {
          parentWidth = res.width;
        }).exec();
        common_vendor.index.createSelectorQuery().in(instance).select(".good-content").boundingClientRect(function(res) {
          const itemWidth = res.width;
          const column = Math.floor(parentWidth / itemWidth);
          remainingSpace = (parentWidth - itemWidth * column) / (column + 1);
          heightArr.value = new Array(column).fill(0);
          resolve();
        }).exec();
      });
    }
    function handleItemClick(goodid) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?goodid=" + goodid
      });
    }
    expose({
      initValue
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.f(goodList, (item, index, i0) => {
          return {
            a: item.Goodimg,
            b: index,
            c: common_vendor.o(loadImage, item.Goodid),
            d: common_vendor.t(item.Goodname),
            e: common_vendor.t(item.Explain.replace(/,/g, "，")),
            f: common_vendor.t(item.price.split(",")[0]),
            g: item.Goodid,
            h: "good-item-" + index,
            i: `translate(${item.x || 0}, ${item.y || 0})`,
            j: common_vendor.o(($event) => handleItemClick(item.Goodid), item.Goodid)
          };
        }),
        c: Math.max(...heightArr.value) + 30 + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-647ba82d"], ["__file", "C:/Users/1/Documents/person_file/mallApp/components/water-fall-good.vue"]]);
wx.createComponent(Component);
