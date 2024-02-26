<template>
  <view class="my">
    <myHeader></myHeader>
    <view class="content">
      <view class="love">
        <view v-for="item in loveList" :key="item.text">{{ item.text }}</view>
      </view>
      <view class="order-form">
        <view
          v-for="item in orderFormList"
          :key="item.text"
          class="order-form-item"
          @click="handleGoOrderClick(item.field)"
        >
          <uni-icons :type="item.icon" color="black" size="60rpx"></uni-icons>
          <view class="text">{{ item.text }}</view>
        </view>
      </view>
    </view>
    <view class="service">
      <view
        v-for="item in serviceList"
        :key="item.text"
        class="service-item"
        @click="item.click"
      >
        <!-- #ifndef H5  -->
        <image
          class="image"
          :src="item.imgSrc"
          :lazy-load="true"
          mode="widthFix"
        ></image>
        <!-- #endif  -->
        <!-- #ifdef H5  -->
        <img class="image" v-lazy="item.imgSrc" />
        <!-- #endif  -->
        <view class="text">{{ item.text }}</view>
      </view>
    </view>
    <!-- 轮播图 -->
    <banner :banners="banners" ref="homeBannerRef"></banner>
    <!-- 商品列表 -->
    <waterFallGood
      title="为你精选"
      :goodList="goodList"
      ref="waterFallGoodRef"
    ></waterFallGood>
  </view>
</template>

<script setup>
import { onLoad, onReachBottom, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my.js";
import banner from "@/components/banner.vue";
import waterFallGood from "@/components/water-fall-good.vue";
import myHeader from "./cpns/my-header.vue";

const waterFallGoodRef = ref();
const myStore = useMyStore();
const { banners, goodList, userInfo } = storeToRefs(myStore);
const loveList = [{ text: "收藏" }, { text: "足迹" }, { text: "关注" }];
const orderFormList = [
  {
    icon: "wallet",
    text: "待付款",
    field: "pendingPayment",
  },
  {
    icon: "paperplane",
    text: "待收货",
    field: "toBeReceived",
  },
  {
    icon: "chat",
    text: "待评价",
    field: "toBeEvaluated",
  },
  {
    icon: "help",
    text: "退换/售后",
    field: "returnsAfterSales",
  },
  {
    icon: "calendar",
    text: "全部订单",
    field: "allOrders",
  },
];
function handleGoOrderClick(value) {
  if (!myStore.isLogin) {
    uni.navigateTo({
      url: "/pages/login/login",
    });
    return;
  }
  uni.navigateTo({
    url: `/pages/orderManage/orderManage?type=${value}`,
  });
}
const serviceList = [
  {
    imgSrc: "../../static/service/vip.png",
    text: "会员中心",
  },
  {
    imgSrc: "../../static/service/cheap.png",
    text: "我的优惠",
  },
  {
    imgSrc: "../../static/service/centre.png",
    text: "服务中心",
  },
  {
    imgSrc: "../../static/service/shop.png",
    text: "小E商城",
  },
  {
    imgSrc: "../../static/service/f.png",
    text: "我的F码",
  },
  {
    imgSrc: "../../static/service/setting.png",
    text: "设置",
    click: () => {
      if (!myStore.isLogin) {
        uni.navigateTo({
          url: "/pages/login/login",
        });
        return;
      }
      uni.navigateTo({
        url: "/pages/setting/setting",
      });
    },
  },
];
let page = 1;
onLoad(async () => {
  //获取数据
  await myStore.fetchMyBanner();
  await myStore.fetchGoodList(page);
  await (waterFallGoodRef.value && waterFallGoodRef.value.initValue());
});
onReachBottom(async () => {
  await myStore.fetchGoodList(++page);
});
onShow(() => {
  const phone = uni.getStorageSync("phone");
  if (uni.getStorageSync("isLogin") && !myStore.isLogin) {
    myStore.fetchUserInfo({ phone });
  }
});
</script>

<style lang="scss">
.my {
  $grayColor: lighten($gFontGrayColor, 10%);
  padding: 20rpx;
  .content {
    margin: 30rpx 0;
    background-color: white;
    border-radius: 20rpx;
    font-size: $gFontSize;
    .love {
      padding: 25rpx 0;
      @include normalFlex(row);
      color: $grayColor;
      border-bottom: 1px solid #efefef;
      view {
        width: 33.33%;
        text-align: center;
        &:nth-child(2) {
          border-left: 1px solid #efefef;
          border-right: 1px solid #efefef;
        }
      }
    }
    .order-form {
      @include normalFlex(row, space-between);
      padding: 30rpx;
      border-radius: 20rpx;
      .order-form-item {
        @include normalFlex(column);
        .text {
          margin-top: 10rpx;
        }
      }
    }
  }
  .service {
    padding: 30rpx 20rpx;
    @include normalFlex();
    flex-wrap: wrap;
    background-color: white;
    border-radius: 10rpx;

    .service-item {
      width: 33.33%;
      text-align: center;
      margin-bottom: 60rpx;
      &:nth-child(n + 4) {
        margin-bottom: 0;
      }
      .image {
        width: 60rpx;
        margin: 0 auto 20rpx;
      }
    }
  }
  .banner,
  .water-fall-good {
    margin: 20rpx -20rpx;
  }
}
</style>
