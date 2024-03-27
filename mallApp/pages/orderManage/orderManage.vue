<template>
  <view class="order-manage">
    <!-- 选项栏 -->
    <view class="option">
      <template v-for="item in orderFormList" :key="item.field">
        <view
          :class="{ active: item.field === type }"
          class="select"
          @click="
            type = item.field;
            orderList = [];
          "
          >{{ item.text }}</view
        >
      </template>
    </view>
    <template v-if="orderList.length === 0">暂无数据</template>
    <template v-for="(item, index) in orderList" :key="item">
      <view class="order-list-box">
        <view class="top">
          <view class="left">
            <image class="image" src="@/static/logo.png" mode="widthFix" />
            <text>小E商城</text>
          </view>
          <view class="right">{{
            item.condition === "购买成功" ? "待发货" : item.condition
          }}</view>
        </view>
        <view class="good">
          <template v-for="(sonItem, sonIndex) in item.goods" :key="item">
            <view class="son-good">
              <view class="good-image">
                <image class="image" :src="sonItem.goodImg" mode="widthFix"
              /></view>
              <view class="good-name">
                {{
                  sonItem.goodName +
                  " " +
                  sonItem.type.split(",")[item.type[sonIndex]] +
                  " " +
                  sonItem.color.split(",")[item.color[sonIndex]]
                }}</view
              >
              <view class="good-liquidation">
                <view class="good-price"
                  >￥{{ sonItem.price.split(",")[item.type[sonIndex]] }}</view
                >
                <view class="good-num"
                  >x{{ item.num.split(",")[sonIndex] }}</view
                >
              </view>
            </view>
          </template>
        </view>
        <view class="bottom">
          <view class="left">
            {{ item.createdAt }}
          </view>
          <view class="right">
            共{{ item.totalNum }}件商品 实付金额：<text class="price">
              {{ item.totalPrice }}</text
            >
          </view>
        </view>
        <view class="order-option" v-if="item?.condition !== '确认收货'">
          <view class="button">查看物流</view>
          <view
            class="button confirm-btn"
            @click="handleConfirmClick(item.condition, item.orderId, index)"
            >确认收货</view
          >
        </view>
      </view>
    </template>
  </view>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my.js";
import { useGoodStore } from "@/store/good.js";
import { tips } from "@/utils/tips.js";

const myStore = useMyStore();
const goodStore = useGoodStore();
const { orderList } = storeToRefs(goodStore);
let page = ref(1);
const orderFormList = [
  {
    text: "待付款",
    field: "pendingPayment",
  },
  {
    text: "待收货",
    field: "toBeReceived",
  },
  {
    text: "待评价",
    field: "toBeEvaluated",
  },
  {
    text: "退换/售后",
    field: "returnsAfterSales",
  },
  {
    text: "全部订单",
    field: "allOrders",
  },
];
const type = ref("toBeReceived");
onLoad((option) => {
  type.value = option.type || "toBeReceived";
});
watchEffect(() => {
  if (!myStore.isLogin) return;
  goodStore.fetchgetOrderList({
    page: page.value,
    limit: 10,
    userId: myStore.userInfo.id,
    condition: type.value,
  });
});
//确认收货按钮
function handleConfirmClick(condition, orderId, index) {
  if (condition === "购买成功") {
    tips("未发货");
    return;
  }
  uni.showModal({
    content: "是否确认收货",
    success: async function (res) {
      if (res.confirm) {
        await goodStore.fetchReceived({
          userId: myStore.userInfo.id,
          orderId,
        });
        orderList.value.splice(index, 1);
      }
    },
  });
}
onReachBottom(async () => {
  page.value++;
});
</script>

<style lang="scss" scoped>
.order-manage {
  padding-bottom: 20rpx;
  .option {
    padding: 0 20rpx;
    @include normalFlex(row, space-between);
    background-color: #ffffff;
    .select {
      padding: 30rpx 0;
      font-size: $gFontSize;
      color: $gFontGrayColor;
      &.active {
        color: $gPriceColor;
        border-bottom: 1px solid $gPriceColor;
      }
    }
  }
  .order-list-box {
    margin-top: 20rpx;
    background-color: white;
    padding: 10rpx 0;
    .top {
      @include normalFlex(row, space-between);
      padding: 0 20rpx 10rpx;
      .left {
        @include normalFlex(row, flex-start);
        flex-grow: 1;
        .image {
          width: 60rpx;
        }
      }
      .right {
        font-size: $gFontSize;
        color: $gPriceColor;
      }
    }
    .good {
      border: 1px solid #e3e3e3;
      border-left: none;
      border-right: none;
      .son-good {
        @include normalFlex(row, space-between);
        margin-left: 40rpx;
        padding-right: 20rpx;
        border-bottom: 1px solid #e3e3e3;
        &:last-child {
          border-bottom: none;
        }
        .good-image {
          width: 200rpx;
        }
        .good-name {
          flex-grow: 1;
        }
        .good-liquidation {
          text-align: right;
          font-size: $gFontSize;
          color: #6e6e6e;
        }
      }
    }
    .bottom {
      @include normalFlex(row, space-between, flex-end);
      padding: 10rpx 20rpx;
      color: #6e6e6e;
      font-size: $gFontSize;
      .right {
        color: #5a5a5a;
        .price {
          font-size: 36rpx;
          color: black;
        }
      }
    }
    .order-option {
      @include normalFlex(row, flex-end);
      margin: 10rpx 0;
      font-size: $gFontSize;
      .button {
        padding: 10rpx 20rpx;
        margin-right: 20rpx;
        border: 1px solid #e3e3e3;
        border-radius: 10rpx;
      }
      .confirm-btn {
        border: none;
        color: white;
        background-color: $gPriceColor;
      }
    }
  }
}
</style>
