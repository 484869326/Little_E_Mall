<template>
  <view class="password">
    <view class="title">请输入你的密码</view>
    <form @submit="handleRegisterClick">
      <view class="input-view">
        <input
          type="text"
          :password="isPwd"
          name="password"
          class="input"
          :class="{ 'input-focus': isFocus }"
          placeholder="请输入您的密码"
          @focus="isFocus = true"
          @blur="isFocus = false"
        />
        <uni-icons
          :type="isPwd ? 'eye-slash-filled' : 'eye-filled'"
          size="42rpx"
          @click="isPwd = !isPwd"
        ></uni-icons>
      </view>
      <button form-type="submit" class="btn">注册</button>
    </form>
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMyStore } from "@/store/my";
import { useTips } from "@/utils/tips";
import tips from "@/components/tips.vue";

const myStore = useMyStore();
const isFocus = ref(false);
const isPwd = ref(true);
const tipsRef = ref<InstanceType<typeof tips>>();
async function handleRegisterClick(event: any) {
  const { password } = event.detail.value;
  const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
  if (!password) {
    useTips(tipsRef, "密码不能为空");
    return;
  }
  if (!passwordReg.test(password)) {
    useTips(
      tipsRef,
      "密码格式(最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符)"
    );
    return;
  }
  const res = await myStore.fetchRegister({ password });
  if (res !== "0") {
    useTips(tipsRef, "登录成功");
    uni.setStorageSync("isLogin", true);
    setTimeout(() => {
      uni.switchTab({
        url: "/pages/home/home",
      });
    }, 1000);
  } else {
    useTips(tipsRef, "注册失败");
  }
}
</script>

<style lang="scss" scoped>
.password {
  .title {
    margin: 40rpx 0 30rpx;
    padding-left: 0;
    font-size: 38rpx;
  }
  .input-view {
    position: relative;
    padding: 20rpx 60rpx 20rpx 20rpx;
    border-bottom: 1px solid #b1b1b1;
    // 兼容苹果浏览器不然位置会往下跑
    vertical-align: top;
    .input {
      &.input-focus {
        border-bottom-color: $gPriceColor;
      }
    }
    .uni-icons {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .btn {
    margin: 30rpx 0;
    color: white;
    background-color: $gPriceColor;
    border-radius: 9999rpx;
    font-size: 30rpx;
  }
}
</style>
