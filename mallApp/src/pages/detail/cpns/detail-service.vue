<template>
  <div class="detail-service">
    <drawer @close="$emit('close')">
      <view class="title">服务说明</view>
      <view class="arr" v-for="item in arr" :key="item.title">
        <view class="arr-item"
          ><uni-icons type="checkbox-filled" color="#F16729" size="48rpx"></uni-icons
          ><text class="text">{{ item.title }}</text></view
        >
        <view class="arr-text" v-if="item.text">{{ item.text }}</view>
      </view>
    </drawer>
  </div>
</template>

<script setup lang="ts">
import drawer from "@/components/drawer.vue";

const emit = defineEmits(["close"]);
const arr = [
  { title: "小E自营" },
  { title: "小E发货", text: "由小E发货" },
  { title: "7天无理由退货" },
  { title: "7天价格保护" },
  { title: "联系我们", text: "hanli_147@163.com" },
  { title: "手机号", text: "10086111" },
  { title: "作者名字", text: "易小川" },
];
</script>

<style lang="scss">
.detail-service {
  .title {
    font-size: 40rpx;
    font-weight: bold;
    padding: 20rpx;
    text-align: center;
  }
  .arr {
    padding: 16rpx;
    .arr-item {
      font-size: 0rpx;
      font-weight: bold;
      .text {
        padding-left: 10rpx;
        vertical-align: text-bottom;
        font-size: 32rpx;
      }
    }
    .arr-text {
      color: $gFontGrayColor;
      margin-top: 10rpx;
      padding-left: 58rpx;
      font-size: 28rpx;
    }
  }
}
</style>
