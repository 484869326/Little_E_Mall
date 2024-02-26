<template>
  <view class="web-view">
    <web-view :src="url"></web-view>
  </view>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
