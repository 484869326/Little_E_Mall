<template>
  <view class="home">
    <!-- 搜索 -->
    <homeSearch :color="homeSearchColor"></homeSearch>
    <!-- 轮播图 -->
    <banner :banners="banners" ref="homeBannerRef"></banner>
    <!-- 资质文案 -->
    <view class="qualifications">
      <view v-for="item in qualificationsList" :key="item.icon">
        <uni-icons
          :type="item.icon"
          color="#F3402B"
          size="50rpx"
          style="display: block"
        ></uni-icons>
        <text class="qualifications-text">{{ item.text }}</text>
      </view>
    </view>
    <!-- 推荐商品 -->
    <homeRecommend :recommends="recommends"></homeRecommend>
    <!-- 商品列表 -->
    <waterFallGood
      title="精选推荐"
      :goodList="goodList"
      ref="waterFallGoodRef"
    ></waterFallGood>
  </view>
</template>

<script setup lang="ts">
import { onLoad, onShow, onReachBottom, onPageScroll } from "@dcloudio/uni-app";
import { getCurrentInstance, provide, ref } from "vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/store/home";
import banner from "@/components/banner.vue";
import homeSearch from "./cpns/home-search.vue";
import homeRecommend from "./cpns/home-recommend.vue";
import waterFallGood from "@/components/water-fall-good.vue";
import { throttle } from "@/utils";

const instance = getCurrentInstance();
provide("fatherInstance", instance);
const homeStore = useHomeStore();
const homeBannerRef = ref<InstanceType<typeof banner>>();
const { banners, recommends, goodList } = storeToRefs(homeStore);
const homeSearchBg = ref("transpant");
const homeSearchColor = ref("#ffffff");
const waterFallGoodRef = ref<InstanceType<typeof waterFallGood>>();
let page = 1;
onLoad(async () => {
  //获取数据
  await homeStore.fetchHomeMutidata();
  await homeStore.fetchGoodList(page);
  await (waterFallGoodRef.value && waterFallGoodRef.value.initValue());
});
onShow(() => {
  homeSearchBg.value = "transpant";
  homeSearchColor.value = "#ffffff";
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 0,
  });
});
// 资质文案
const qualificationsList = [
  {
    icon: "shop",
    text: "官方商城",
  },
  {
    icon: "hand-up-filled",
    text: "售后无忧",
  },
  {
    icon: "auth-filled",
    text: "资质证照",
  },
];
onReachBottom(async () => {
  await homeStore.fetchGoodList(++page);
});
const throttleOnPageScroll = throttle(
  (e) => {
    if (!homeBannerRef.value) return;
    const swiperHeight = homeBannerRef.value.getSwiperHeight();
    const scrollTop = e.scrollTop;
    if (scrollTop >= parseInt(swiperHeight) - 20) {
      homeSearchBg.value = "#fff";
      homeSearchColor.value = "#f3402b";
    } else {
      homeSearchBg.value = "transpant";
      homeSearchColor.value = "#ffffff";
    }
  },
  500,
  { leading: false, trailing: true }
);
onPageScroll(throttleOnPageScroll);
</script>

<style lang="scss">
.home {
  position: relative;
  .home-search {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: v-bind(homeSearchBg);
    transition: all 0.3s ease-in-out;
  }
  .home-recommend {
    margin: 0 20rpx;
    border-radius: 20rpx;
    background-color: white;
  }
  .qualifications {
    display: flex;
    margin: 20rpx 0;
    view {
      width: 33.33%;
      position: relative;
      @include normalFlex();
      color: $gPriceColor;
      font-size: $gFontSize;
      &:not(:last-child)::after {
        content: "";
        width: 4rpx;
        height: 36rpx;
        @include normalAbsolute(100%);
        border-radius: 9999rpx;
        background-color: #e6d0cf;
      }
      .qualifications-text {
        padding-left: 8rpx;
      }
    }
  }
}
</style>
