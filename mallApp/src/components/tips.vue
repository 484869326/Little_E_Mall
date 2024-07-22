<template name="tips">
  <view class="tips-box" v-if="show">
    <view class="tips-mask">
      <view class="tips-content">
        {{ tipsContent }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";

const tipsContent = ref("");
const width = ref("auto");
const show = ref(false);
let timer: number | null = null;
function open(content: string) {
  tipsContent.value = content;
  width.value = content.length < 30 ? "max-content" : "auto";
  show.value = true;
}
function close() {
  show.value = false;
}
function work(content: string, time: number) {
  open(content);
  timer = setTimeout(() => {
    close();
  }, time);
}
defineExpose({
  work,
});
onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
});
</script>

<style lang="scss" scoped>
.tips-box {
  position: relative;
  box-sizing: border-box;
  .tips-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    .tips-content {
      width: v-bind(width);
      position: absolute;
      padding: 30rpx 60rpx;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #343434;
      color: #f8eddf;
      border-radius: 10rpx;
    }
  }
}
</style>
