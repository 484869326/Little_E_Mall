<template>
  <view class="order">
    <orderAddress></orderAddress>
    <view class="order-good">
      <template v-for="(item, index) in goodList" :key="item.goodId">
        <view class="order-good-info">
          <view class="good-image">
            <!-- #ifndef H5  -->
            <image
              class="image"
              :src="item.goodImg"
              :lazy-load="true"
              mode="widthFix"
            ></image>
            <!-- #endif  -->
            <!-- #ifdef H5  -->
            <img v-lazy="item.goodImg" class="image" />
            <!-- #endif  -->
          </view>
          <view class="good-info">
            <view>{{
              item.goodName + " " + (item.goodType as any)[item.type as any]
            }}</view>
            <view class="color">{{ (item.goodColor as any)[item.color as any] }}</view>
            <view class="price-num">
              <text class="price">￥{{ item.price[item.type as any] }}</text>
              <text class="num">x {{ item.num }}</text>
            </view>
          </view>
        </view>
      </template>
      <view class="date">
        <text>配送日期</text>
        <text>预计{{ getNextDay() }}送达</text>
      </view>
    </view>

    <view class="inventory">
      <view class="view">
        <view>商品总价</view>
        <view>￥{{ goodStore.totalPrice }}</view>
      </view>
      <view class="view">
        <view>优惠卷</view>
        <view class="no-available">
          无可用
          <uni-icons type="right" color="#C4C4C4"></uni-icons>
        </view>
      </view>
      <view class="view"
        ><view>礼品卡</view>
        <view class="no-available"
          >无可用 <uni-icons type="right" color="#C4C4C4"></uni-icons
        ></view>
      </view>
      <view class="view"
        ><view>现金券</view>
        <view class="no-available"
          >无可用 <uni-icons type="right" color="#C4C4C4"></uni-icons></view
      ></view>
      <view class="view"
        ><view>红包</view
        ><view class="no-available"
          >无可用 <uni-icons type="right" color="#C4C4C4"></uni-icons></view
      ></view>
      <view class="view"><view>运费</view><view>￥0</view></view>
    </view>
    <view class="invoice">
      <text>发票</text>
      <text>个人电子发票-个人<uni-icons type="right" color="#C4C4C4"></uni-icons></text>
    </view>
    <view class="calculate">
      <view class="calculate-msg">
        共{{ goodStore.totalNum }}件,合计:
        <text class="price">￥{{ goodStore.totalPrice }}</text>
      </view>
      <view class="go-pay" @click="hanleGoPayClick">去付款</view>
    </view>
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my";
import { useGoodStore } from "@/store/good";
import orderAddress from "./cpns/order-address.vue";
import { useTips } from "@/utils/tips";
import tips from "@/components/tips.vue";

const goodStore = useGoodStore();
const myStore = useMyStore();
const { goodList } = storeToRefs(goodStore);
const tipsRef = ref<InstanceType<typeof tips>>();
const data = {
  goodId: 0,
  isBuy: 0,
};
onLoad((option: any) => {
  goodList.value = [];
  let { goodId, isBuy } = option;
  Object.assign(data, { goodId, isBuy: isBuy === "true" });
  if (data.isBuy && !goodId) {
    uni.switchTab({
      url: "/pages/home/home",
    });
  }
  watchEffect(() => {
    if (!myStore.isLogin) return;
    goodStore.fetchGoodList({ ...data, userId: myStore.userInfo.id });
  });
});

//假设预计送达时间  是明天
function getNextDay() {
  const today = new Date(); // 获取今天的日期
  const nextDay = new Date(today); // 创建一个新的日期对象，初始化为今天的日期
  nextDay.setDate(today.getDate() + 1); // 设置日期为下一天
  const nextDayDate = nextDay.getDate(); // 获取下一天的日期
  const nextDayMonth = nextDay.getMonth() + 1; // 获取下一天的月份（注意月份是从 0 开始计数的，所以要加 1）
  const formattedDate =
    nextDayMonth.toString().padStart(2, "0") +
    "月" +
    nextDayDate.toString().padStart(2, "0") +
    "日"; // 格式化日期为 "MM月DD日"
  return formattedDate; // 返回格式化后的日期
}

async function hanleGoPayClick() {
  try {
    const { id, city, defaultId } = myStore.userInfo;
    const address = city[defaultId];
    const res = await goodStore.fetchBuy({
      ...goodStore.dataId,
      userId: id,
      totalPrice: goodStore.totalPrice,
      name: address.addressName,
      address: address.addressRegionText.replace(/\//g, "") + address.addressDetail,
      phone: address.addressPhone,
    });
    if (res === "success") {
      useTips(tipsRef, "购买成功");
      setTimeout(() => {
        uni.navigateTo({
          url: "/subPages/orderManage/orderManage?type=toBeReceived",
        });
      }, 1000);
    } else {
      useTips(tipsRef, "购买失败");
    }
  } catch {
    useTips(tipsRef, "请先填写收货地址");
  }
}
</script>

<style lang="scss" scoped>
.order {
  padding: 30rpx 20rpx 0 20rpx;
  .order-good {
    .order-good-info {
      @include normalFlex(row, flex-start);
      padding: 20rpx;
      background: white;
      &:first-child {
        border-radius: 20rpx 20rpx 0 0;
      }
      .good-image {
        width: 200rpx;
        background-color: #fafafa;
      }
      .good-info {
        flex-grow: 1;
        padding-left: 20rpx;
        .color {
          margin: 10rpx 0 20rpx 0;
          font-size: $gFontSize;
          color: #8d8d8d;
        }
        .price-num {
          @include normalFlex(row, space-between);
          width: 100%;
          font-size: $gFontSize;
          .price {
            color: $gPriceColor;
          }
          .num {
            color: #8d8d8d;
          }
        }
      }
    }
    .date {
      @include normalFlex(row, space-between);
      padding: 30rpx 20rpx;
      background-color: #fdfdfd;
      border-radius: 0 0 20rpx 20rpx;
    }
  }
  .inventory {
    margin-top: 30rpx;
    padding: 40rpx 20rpx;
    border-radius: 20rpx;
    font-size: $gFontSize;
    background-color: white;
    .view {
      @include normalFlex(row, space-between);
      margin-bottom: 40rpx;
      &:last-child {
        margin-bottom: 0;
      }
      .no-available {
        color: #c4c4c4;
      }
    }
  }
  .invoice {
    @include normalFlex(row, space-between);
    margin-top: 30rpx;
    padding: 30rpx 20rpx;
    border-radius: 20rpx;
    font-size: $gFontSize;
    background-color: white;
  }
  .calculate {
    position: fixed;
    @include normalFlex(row, space-between);
    width: 100%;
    height: 120rpx;
    padding: 0 20rpx;
    left: 0;
    bottom: 0;
    background-color: white;
    font-size: $gFontSize;
    box-sizing: border-box;
    .calculate-msg {
      .price {
        font-size: 38rpx;
        color: $gPriceColor;
        font-weight: bold;
      }
    }
    .go-pay {
      padding: 15rpx 40rpx;
      font-size: 30rpx;
      border-radius: 9999rpx;
      color: white;
      background-color: $gPriceColor;
    }
  }
}
</style>
