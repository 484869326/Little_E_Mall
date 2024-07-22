<template>
  <view class="shopping-balance">
    <view class="left">
      <uni-icons
        :type="isCheckAll ? 'checkbox-filled' : 'circle'"
        size="48rpx"
        :color="isCheckAll ? '#f3402b' : '#7e7e7e'"
        @click="handleCheckAllClick"
      ></uni-icons>
      <text>全选</text>
    </view>
    <view class="right">
      <view class="info">
        <view class="info-sum">
          <text class="info-sum-tips">合计(不含运费): </text
          ><view class="total-price"
            ><text class="icon">￥</text><text>{{ totalCheckPrice }}</text></view
          >
        </view>
        <view class="info-tips">免运费 优惠:￥0.00 </view>
      </view>
      <button class="button" :disabled="totalCheck === 0" @click="handleSettlementClick">
        结算{{ totalCheck }}
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { useShoppingStore } from "@/store/shopping";
import { storeToRefs } from "pinia";

const instance = getCurrentInstance();
const shoppingStore = useShoppingStore();
const { isCheckAll, totalPrice, totalCheckPrice, totalCheck, total } =
  storeToRefs(shoppingStore);

const emit = defineEmits(["checkAll"]);

function handleCheckAllClick() {
  const isCheckAllValue = !isCheckAll.value;
  isCheckAll.value = isCheckAllValue;
  totalCheckPrice.value = isCheckAllValue ? totalPrice.value : 0;
  totalCheck.value = isCheckAllValue ? total.value : 0;
  emit("checkAll", isCheckAllValue);
}
function handleSettlementClick() {
  uni.navigateTo({
    url: "/subPages/order/order?isBuy=false",
  });
}
//得到该元素的高度
function getBalanceHeight() {
  return new Promise((resolve) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select(".shopping-balance")
      .boundingClientRect((data: any) => {
        resolve(data.height + "px");
      })
      .exec();
  });
}
defineExpose({
  getBalanceHeight,
});
</script>

<style lang="scss" scoped>
.shopping-balance {
  @include normalFlex(row, space-between);
  position: fixed;
  width: 100%;
  padding: 20rpx;
  bottom: var(--window-bottom, 0);
  background-color: #ffffff;
  box-shadow: $gShadowWhiteColor;
  box-sizing: border-box;
  .left,
  .right {
    @include normalFlex();
  }
  .right {
    .info {
      margin-right: 20rpx;
      .info-sum {
        @include normalFlex();
        .info-sum-tips {
          font-size: $gFontSize;
          color: $gFontGrayColor;
        }
        .total-price {
          @include normalFlex();
          font-size: 36rpx;
          color: $gPriceColor;
          .icon {
            letter-spacing: -4rpx;
            font-size: $gFontSize;
          }
        }
      }
      .info-tips {
        font-size: $gFontSize;
        color: $gFontGrayColor;
      }
    }
    .button {
      margin: 0;
      padding: 4rpx 48rpx;
      color: white;
      background-color: $gPriceColor;
      border-radius: 9999rpx;
      &[disabled]:not([type]) {
        background-color: lighten($gPriceColor, 20%);
      }
    }
  }
}
</style>
