<template>
  <swiper
    class="banner"
    :indicator-dots="true"
    :autoplay="autoplay"
    :interval="3000"
    :duration="1000"
    :style="{ height: swiperHeight }"
  >
    <template v-for="(item, index) in banners" :key="item">
      <swiper-item>
        <image
          :src="item"
          mode="widthFix"
          class="image"
          @load="index === 0 && $nextTick(setSwiperHeight)"
          @click="handlePreviewImage(index)"
        ></image>
      </swiper-item>
    </template>
  </swiper>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";

const props = defineProps(["banners", "isPreview"]);
const instance = getCurrentInstance();
//自动播放
const autoplay = ref(true);
//高度样式(默认150px)
const swiperHeight = ref("150px");
//动态改变高度
function setSwiperHeight() {
  uni
    .createSelectorQuery()
    .in(instance)
    .select(".image")
    .boundingClientRect((data) => {
      swiperHeight.value = data.height + "px";
    })
    .exec();
}
function getSwiperHeight() {
  return swiperHeight.value;
}
function handlePreviewImage(index) {
  if (!props.isPreview) return;
  uni.previewImage({
    current: index,
    urls: props.banners,
  });
}

defineExpose({
  getSwiperHeight,
});
</script>

<style lang="scss">
.banner {
  :deep(.uni-swiper-dots) {
    background-color: rgba(0, 0, 0, 0.3) !important;
    border-radius: 9999rpx;
    height: 6rpx;
    overflow: hidden;
    .uni-swiper-dot {
      padding: 0 12rpx;
      background-color: transparent !important;
      margin: 0;
    }
    .uni-swiper-dot-active {
      background-color: white !important;
      border-radius: 0 !important;
    }
  }
  .image {
    width: 100%;
  }
}
</style>
