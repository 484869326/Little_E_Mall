<template>
  <view class="web-view">
    <!-- #ifndef MP-WEIXIN -->
    <navigation url="1"></navigation>
    <!-- #endif -->
    <web-view :src="url"></web-view>
  </view>
</template>

<script setup lang="ts">
import navigation from "@/components/navigation.vue";
defineProps({
  url: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
