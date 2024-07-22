<template>
  <view class="home-recommend">
    <view
      class="recommend-item"
      v-for="item in recommends"
      :key="item.cid"
      @click="handleClick(item.cName)"
    >
      <!-- #ifndef H5 -->
      <image :src="item.cImg" mode="widthFix" class="image" :lazy-load="true"></image>
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <img v-lazy="item.cImg" class="image" />
      <!-- #endif -->
      <text class="text">{{ item.cName }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps(["recommends"]);
//跳转搜索页
function handleClick(searchValue: string) {
  uni.navigateTo({
    url: "/pages/search/search?searchValue=" + searchValue,
  });
}
</script>

<style lang="scss">
.home-recommend {
  @include normalFlex(row, space-around, center);
  flex-wrap: wrap;
  padding: 10rpx 20rpx;
  .recommend-item {
    margin: 15rpx 0;
    @include normalFlex(column);
    .image {
      width: 120rpx;
    }
    .text {
      font-size: 24rpx;
      margin-top: 10rpx;
    }
  }
}
</style>
