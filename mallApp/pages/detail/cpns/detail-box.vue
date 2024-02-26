<template>
  <!-- 通用盒子 -->
  <view class="detail-box">
    <text class="text">{{ title }}</text>
    <view class="slot">
      <slot></slot>
    </view>
    <uni-icons type="right" size="40rpx" color="#060606"></uni-icons>
  </view>
</template>

<script setup>
defineProps(["title"]);
</script>

<style lang="scss">
.detail-box {
  @include normalFlex(row, space-between, flex-start);
  .text {
    color: $gFontGrayColor;
    flex-shrink: 0;
  }
  .slot {
    margin-left: 20rpx;
    flex-grow: 1;
  }
}
</style>
