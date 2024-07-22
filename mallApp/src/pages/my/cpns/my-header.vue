<template>
  <view class="my-header">
    <!-- 如果分开 用v-lazy  会没法重新加载图片 这里h5就不懒加载了  -->
    <image class="image" :src="headList.imgSrc" :lazy-load="true" mode="widthFix"></image>
    <view class="navigator" @click="handleLoginClick"
      >{{ headList.navigator }}
      <uni-icons type="right" color="#393939" size="30rpx"></uni-icons>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my";
import userImage from "@/static/user.png";

const myStore = useMyStore();
const { userInfo } = storeToRefs(myStore);

const headList = computed(() => {
  const value = userInfo.value;
  const imgSrc = value.avatarUrl || userImage;
  const navigator = value.nickName || value.phone || "登录/注册";
  return {
    imgSrc,
    navigator,
  };
});
// 点击登录
function handleLoginClick() {
  if (myStore.isLogin) {
    uni.navigateTo({
      url: "/pages/setting/setting",
    });
    return;
  }
  uni.navigateTo({
    url: "/pages/login/login",
  });
}
</script>

<style lang="scss" scoped>
.my-header {
  @include normalFlex(row, flex-start);
  .image {
    width: 120rpx;
    border-radius: 50%;
    overflow: hidden;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.1));
  }
  .navigator {
    margin-left: 40rpx;
    color: #393939;
    font-size: 38rpx;
    font-weight: 600;
  }
}
</style>
