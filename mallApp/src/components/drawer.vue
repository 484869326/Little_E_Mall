<template>
  <!-- 遮罩层 -->
  <view @touchmove.stop.prevent="() => {}" @mousewheel.prevent="() => {}">
    <view class="mask" @click="$emit('close')"></view>
    <view class="drawer">
      <!-- 关闭按钮 -->
      <view class="close" @click="$emit('close')">
        <uni-icons type="clear" size="38rpx" color="#7e7e7e"></uni-icons>
      </view>
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps();
defineEmits(["close"]);
</script>

<style lang="scss">
.mask {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.drawer {
  position: fixed;
  width: 100%;
  padding: 20rpx 25rpx;
  bottom: var(--window-bottom, 0);
  border-radius: 30rpx 30rpx 0 0;
  background-color: white;
  box-shadow: $gShadowWhiteColor;
  box-sizing: border-box;
  z-index: 11;
  .close {
    position: absolute;
    right: 20rpx;
  }
}
</style>
