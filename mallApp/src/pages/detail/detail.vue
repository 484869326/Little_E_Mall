<template>
  <!-- #ifdef MP-WEIXIN -->
  <page-meta :page-style="noScroll ? 'overflow: hidden;' : 'overflow: visible;'">
    <!-- #endif -->
    <view
      class="detail"
      :style="{
        'padding-bottom': paddingBottom + 'px',
      }"
    >
      <!-- 轮播图 -->
      <banner :banners="detail.swiper" :isPreview="true"></banner>
      <!-- 商品信息 -->
      <view class="good-info">
        <view class="good-price">￥{{ (detail.price ?? [])[data.typeIndex] }}</view>
        <view class="good-name">{{ detail.goodName }}</view>
        <view class="good-desc">{{ detail.advertise }}</view>
      </view>
      <!-- 活动 -->
      <detailBox title="活动" class="normal-box activity">
        <text class="text">分期立减</text>
        <text>分期最高减30元</text>
      </detailBox>
      <!-- 购买商品信息 -->
      <view class="good-buy-msg normal-box">
        <detailBox title="已选" @click="handleShowBuyClick">
          {{ selectName }}
        </detailBox>
        <detailBox title="配送" class="delivery" @click="handleChooseAddressClick">
          <uni-icons type="location" size="40rpx" color="#7e7e7e"></uni-icons
          ><text class="text">{{ myStore.addressRegionText }}</text>
        </detailBox>
        <detailBox title="服务" class="service" @click="childName = 'service'">
          <view class="service-item"
            ><uni-icons type="checkbox" size="40rpx" color="#7e7e7e"></uni-icons
            ><text class="text">小E自营</text></view
          >
          <view class="service-item"
            ><uni-icons type="checkbox" size="40rpx" color="#7e7e7e"></uni-icons
            ><text class="text">小E发货</text></view
          >
          <view class="service-item"
            ><uni-icons type="checkbox" size="40rpx" color="#7e7e7e"></uni-icons
            ><text class="text">7天无理由退货(到店自取拆封后不支持)</text></view
          >
        </detailBox>
      </view>
      <!-- 商品介绍 -->
      <view class="good-introduction">
        <template v-for="item in detail.detail" :key="item">
          <waterMask text="小E商城">
            <!-- #ifndef H5  -->
            <image class="image" :src="item" :lazy-load="true" mode="widthFix"></image>
            <!-- #endif  -->
            <!-- #ifdef H5  -->
            <img class="image" v-lazy="item" />
            <!-- #endif  -->
          </waterMask>
        </template>
      </view>
      <!-- 底部 -->
      <detailBottom ref="detailBottomRef" @add="handleShowBuyClick"></detailBottom>
      <detailBuy
        v-if="childName === 'buy'"
        ref="detailBuyRef"
        @close="childName = ''"
        @load="loadData"
        @update="updateData"
        :detail="detail"
      ></detailBuy>
      <detailService
        v-else-if="childName === 'service'"
        @close="childName = ''"
      ></detailService>
    </view>
    <!-- #ifdef MP-WEIXIN -->
  </page-meta>
  <!-- #endif -->
  <tips ref="tipsRef"></tips>
</template>

<script setup lang="ts">
import { ref, reactive, computed, toRaw, watch } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { storeToRefs } from "pinia";
import { useGoodStore } from "@/store/good";
import { useMyStore } from "@/store/my";
import banner from "@/components/banner.vue";
import detailBottom from "./cpns/detail-bottom.vue";
import detailBox from "./cpns/detail-box.vue";
import detailBuy from "./cpns/detail-buy.vue";
import detailService from "./cpns/detail-service.vue";
import { useTips } from "@/utils/tips";
import waterMask from "../../components/water-mask.vue";
import tips from "@/components/tips.vue";

const goodStore = useGoodStore();
const myStore = useMyStore();
const { detail } = storeToRefs(goodStore);

const detailBottomRef = ref<InstanceType<typeof detailBottom>>();
const detailBuyRef = ref<InstanceType<typeof detailBuy>>();
const tipsRef = ref<InstanceType<typeof tips>>();

const noScroll = ref(false);
const data = reactive({
  typeIndex: 0,
  colorIndex: 0,
  num: 1,
});
//动态组件
const childName = ref("");
//距离底部高度
const paddingBottom = ref(0);
//已选择类型
const selectName = computed(() => {
  try {
    const obj = detail.value;
    return (
      obj.goodName +
      " " +
      (obj.color ?? [])[data.colorIndex] +
      " " +
      (obj.type ?? [])[data.typeIndex] +
      " x" +
      data.num
    );
  } catch (error) {
    return "";
  }
});
onLoad(async (option: any) => {
  if (!myStore.isLogin) {
    uni.navigateBack();
    useTips(tipsRef, "请先进行登录");
    return;
  }
  uni.pageScrollTo({
    scrollTop: 1, //距离页面顶部的距离
    duration: 0, // 滚动动画时长
  });
  await goodStore.fetchGoodDetail(option.goodId);
  if (!detailBottomRef.value) return;
  paddingBottom.value = await detailBottomRef.value.getPaddingBottom();
});
//父组件传子组件
function loadData() {
  detailBuyRef.value && detailBuyRef.value.loadData(toRaw(data));
}
//子组件传父组件
function updateData(value: any) {
  Object.assign(data, value);
}
//展示弹窗页面
function handleShowBuyClick(isBuy = true) {
  childName.value = "buy";
  detail.value.isBuy = isBuy;
  detail.value.userId = myStore.userInfo.id;
}
watch(childName, (newVal) => {
  if (newVal) {
    noScroll.value = true;
  } else {
    noScroll.value = false;
  }
});
//选择地址
function handleChooseAddressClick() {
  uni.navigateTo({
    url: "/subPages/receivingAddress/receivingAddress",
  });
}
</script>

<style lang="scss">
.detail {
  &.no-scroll {
    padding-bottom: 0;
    height: calc(100vh - var(--window-top));
    overflow: hidden;
  }
  .normal-box {
    @include normalBox();
  }
  .good-info {
    @include normalBox();
    .good-price {
      color: $gPriceColor;
      font-size: 44rpx;
      font-weight: bold;
    }
    .good-name {
      padding: 20rpx 0;
      font-size: 44rpx;
      font-weight: bold;
    }
  }
  .activity {
    display: flex;
    :deep(.slot) {
      @include normalFlex(row, flex-start, self-end);
      .text {
        margin-right: 20rpx;
        padding: 2rpx 10rpx;
        font-size: 24rpx;
        border: 1px solid $gPriceColor;
        border-radius: 10rpx;
        color: $gPriceColor;
      }
    }
  }
  .delivery {
    padding: 36rpx 0;
    align-items: center;
    .detail-box {
      padding: 36rpx 0;
    }
    :deep(.slot) {
      @include normalFlex(row, flex-start);
      color: $gFontGrayColor;
      .text {
        padding: 0 20rpx 0 10rpx;
      }
    }
  }
  .service {
    :deep(.slot) {
      @include normalFlex(row, flex-start);
      flex-wrap: wrap;
      .service-item {
        @include normalFlex();
        margin-bottom: 10rpx;
        .text {
          color: $gFontGrayColor;
          font-size: $gFontSize;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
