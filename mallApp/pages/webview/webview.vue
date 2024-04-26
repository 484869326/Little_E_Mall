<template>
  <view class="web-view">
    <navigation url="1"></navigation>
    <web-view :src="url"></web-view>
  </view>
</template>

<script setup>
import navigation from "../../components/navigation.vue";
defineProps({
  url: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
