<template>
  <view class="detail-bottom">
    <view class="icon-arr">
      <template v-for="item in iconArr" :key="item.text">
        <view class="icon" @click="item.click">
          <uni-icons :type="item.type" size="56rpx" color="#060606"></uni-icons>
          <text class="text">{{ item.text }}</text>
        </view>
      </template>
    </view>
    <view class="btn-group">
      <button @click="$emit('add', false)">加入购物车</button>
      <button @click="$emit('add')">立即购买</button>
    </view>
  </view>
</template>

<script setup>
import { getCurrentInstance, ref, reactive } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const instance = getCurrentInstance();
const goodIdArr =
  uni.getStorageSync("GOOD_ID").length === 0
    ? []
    : uni.getStorageSync("GOOD_ID").split(",");
const goodId = ref(0);
defineEmits(["add"]);
const iconArr = reactive([
  {
    type: "chatboxes",
    text: "客服",
    click: () => {
      console.log("客服");
    },
  },
  {
    type: "star",
    text: "收藏",
    click: () => {
      //后端暂时没开发收藏功能，先用本地存储代替
      if (goodIdArr.includes(goodId.value)) {
        goodIdArr.splice(goodIdArr.indexOf(goodId.value), 1);
        uni.setStorageSync("GOOD_ID", goodIdArr.join(","));
        iconArr[1].type = "star";
      } else {
        goodIdArr.push(goodId.value);
        uni.setStorageSync("GOOD_ID", goodIdArr.join(","));
        iconArr[1].type = "star-filled";
      }
    },
  },
  {
    type: "shop",
    text: "购物车",
    click: () => {
      uni.switchTab({
        url: "/pages/shopping/shopping",
      });
    },
  },
]);
onLoad((option) => {
  goodId.value = option.goodId;
  if (goodIdArr.includes(option.goodId)) {
    iconArr[1].type = "star-filled";
  }
});
// 获取底部元素的高度
function getPaddingBottom() {
  return new Promise((resolve) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select(".detail-bottom")
      .boundingClientRect(function (res) {
        resolve(res.height);
      })
      .exec();
  });
}
defineExpose({
  getPaddingBottom,
});
</script>

<style lang="scss">
.detail-bottom {
  position: fixed;
  padding: 16rpx 10px;
  @include normalFlex(row, space-between, stretch);
  width: 100%;
  bottom: 0;
  background-color: white;
  box-sizing: border-box;
  .icon-arr {
    flex: 1;
    @include normalFlex();
    .icon {
      width: 33.33%;
      @include normalFlex(column);
      .text {
        font-size: 24rpx;
        color: $gFontGrayColor;
      }
    }
  }
  .btn-group {
    flex: 1.8;
    display: flex;
    button {
      @include normalFlex();
      width: 48%;
      height: 100%;
      font-size: $gFontSize;
      color: white;
      background-color: #f7c971;
      border-radius: 9999px;
      margin-right: 2%;
      &:last-child {
        margin-left: 2%;
        margin-right: 0;
        background-color: $gPriceColor;
      }
    }
  }
}
</style>
