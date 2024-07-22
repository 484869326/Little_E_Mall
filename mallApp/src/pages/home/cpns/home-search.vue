<template>
  <view class="home-search">
    <view class="logo">
      <image src="@/static/logo.png" mode="widthFix" class="image"></image>
    </view>
    <view class="search" @click="handleOpenSearchClick">
      <uni-icons type="search" size="40rpx" color="#b4b4b4"></uni-icons>
      <view class="search-text">搜索</view>
      <view class="icon-scan"
        ><uni-icons type="scan" size="40rpx" color="#b4b4b4"></uni-icons
      ></view>
    </view>
    <uni-icons type="chat" :color="color" size="60rpx"></uni-icons>
  </view>
</template>

<script setup lang="ts">
defineProps(["color"]);
function handleOpenSearchClick() {
  uni.navigateTo({
    url: "/pages/search/search",
  });
}
</script>

<style lang="scss">
.home-search {
  display: flex;
  padding: 20rpx 40rpx 20rpx 30rpx;
  align-items: stretch;
  .logo {
    width: 60rpx;
    height: auto;
    padding-right: 10rpx;
  }
  .search {
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20rpx;
    color: #b4b4b4 !important;
    font-size: $gFontSize;
    background-color: $gBgColor;
    border-radius: 9999rpx;
    margin-right: 10rpx;
    .search-text {
      margin-left: 10rpx;
    }
    .icon-scan {
      position: absolute;
      right: 20rpx;
    }
  }
  .uniui-chat {
    align-self: center;
  }
}
</style>
