<template>
  <view class="navigation">
    <view @click="handleNavigateClick" class="return">
      <uni-icons type="left" size="30" color="#ffffff"></uni-icons>
    </view>
    <view v-if="title" class="title">{{ title }}</view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps(["url", "title", "isTab"]);

function handleNavigateClick() {
  if (props.isTab) {
    uni.switchTab({
      url: props.url,
    });
    return;
  }
  if (props.url === "1") {
    uni.navigateBack({
      delta: 1,
    });
    return;
  }
  uni.navigateTo({
    url: props.url,
  });
}
</script>

<style scoped lang="scss">
.navigation {
  position: relative;
  padding: 10px 0;
  min-height: 30px;
  z-index: 99;
  .return {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    padding: 3px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .title {
    text-align: center;
    color: $gPriceColor;
  }
}
</style>
