<!-- 瀑布流布局的商品列表 -->
<template>
  <view class="water-fall-good" :style="{ height: Math.max(...heightArr) + 30 + 'px' }">
    <view class="title">{{ title }}</view>
    <view
      v-for="(item, index) in goodList"
      :key="item.goodId"
      :id="'good-item-' + index"
      class="good-content"
      :style="{ transform: `translate(${item.x || 0}, ${item.y || 0})` }"
      @click="handleItemClick(item.goodId)"
    >
      <image
        class="image"
        :src="item.goodImg"
        mode="widthFix"
        :data-index="index"
        @load="loadImage"
      />
      <view class="good-name">
        {{ item.goodName }}
      </view>
      <text class="good-type">
        <!-- .replace(/,/g, "|") app不能用replaceAll -->
        {{ item.explain.replace(/,/g, "，") }}
      </text>
      <view class="good-price">￥{{ item.price.split(",")[0] }}</view>
    </view>
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { watch, reactive, ref, getCurrentInstance, inject } from "vue";
import { useMyStore } from "@/store/my";
import { deepClone } from "../utils/index";
import { useTips } from "@/utils/tips";
import tips from "./tips.vue";

const myStore = useMyStore();
const props = defineProps(["title", "goodList"]);
defineEmits(["itemClick"]);
const goodList: any[] = reactive([]);
const instance = getCurrentInstance();
const tipsRef = ref<InstanceType<typeof tips>>();
watch(
  () => props.goodList,
  (newVal) => {
    goodList.push(...deepClone(newVal));
  }
);
const heightArr = ref([0]);
let remainingSpace = 0;
//更新瀑布流布局
const updateLayout = async (item: any, index: number) => {
  const heightArrValue = heightArr.value;
  const itemWidth = item.width;
  const minIndex = heightArrValue.indexOf(Math.min(...heightArrValue));
  const y = heightArrValue[minIndex];
  const minIndexWidth = minIndex * itemWidth;
  const x =
    (minIndex + 1) % 2 !== 0
      ? minIndexWidth + remainingSpace
      : minIndexWidth + remainingSpace * 2;
  goodList[index].x = x + "px";
  goodList[index].y = y + "px";
  heightArrValue[minIndex] += item.height + 15;
};
//加载完运行
function loadImage(el: any) {
  const index = el.target.dataset.index;
  queryElement(index);
}
async function queryElement(index: number) {
  await new Promise((resolve, reject) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select(`#good-item-${index}`)
      .boundingClientRect(async function (res) {
        await updateLayout(res, index);
        resolve(true);
      })
      .exec();
  });
}
//初始化数据
function initValue() {
  new Promise((resolve, reject) => {
    let parentWidth = 0;
    uni
      .createSelectorQuery()
      .in(instance)
      .select(".water-fall-good")
      .boundingClientRect(function (res: any) {
        parentWidth = res.width;
      })
      .exec();
    uni
      .createSelectorQuery()
      .in(instance)
      .select(".good-content")
      .boundingClientRect(function (res: any) {
        const itemWidth = res.width;
        const column = Math.floor(parentWidth / itemWidth);
        remainingSpace = (parentWidth - itemWidth * column) / (column + 1);
        heightArr.value = new Array(column).fill(0);
        resolve(true);
      })
      .exec();
  });
}
//去详情
function handleItemClick(goodId: string) {
  if (myStore.isLogin) {
    uni.navigateTo({
      url: "/pages/detail/detail?goodId=" + goodId,
    });
  } else {
    useTips(tipsRef, "用户未登录", 2000);
    setTimeout(() => {
      uni.navigateTo({
        url: "/pages/login/login",
      });
    }, 2000);
  }
}
defineExpose({
  initValue,
});
</script>

<style lang="scss" scoped>
.water-fall-good {
  margin-top: 10rpx;
  position: relative;
  .good-content {
    position: absolute;
    margin: 10rpx 0;
    @include normalFlex(column, center, flex-start);
    width: 46%;
    background-color: white;
    margin: 10rpx 0;
    padding-bottom: 20rpx;
    border-radius: 10rpx;
    .good-type {
      display: block;
      padding: 0 20rpx;
      width: 100%;
      font-size: 28rpx;
      color: $gFontGrayColor;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
    .good-price {
      font-size: 36rpx;
    }
    .good-name,
    .good-price {
      padding: 20rpx;
    }
  }
}
</style>
