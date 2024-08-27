<template>
  <view class="login">
    <view class="logo">
      <!-- #ifndef H5  -->
      <image
        class="image"
        src="@/static/logo.png"
        :lazy-load="true"
        mode="widthFix"
      ></image>
      <!-- #endif  -->
      <!-- #ifdef H5  -->
      <img class="image" v-lazy="'static/logo.png'" />
      <!-- #endif  -->
    </view>
    <form class="form" @submit="handleSubmitClick">
      <input
        type="text"
        name="phone"
        autocomplete="username"
        class="input"
        placeholder="请输入手机号"
        v-model="phoneValue"
      />
      <!-- 只有当密码登录的时候才这样 -->
      <input
        v-if="isPwd"
        name="password"
        password
        type="text"
        autocomplete="password"
        class="input password"
        placeholder="请输入密码"
      />
      <view class="protocol">
        <uni-icons
          :type="isChecked ? 'checkbox-filled' : 'circle'"
          size="36rpx"
          :color="isChecked ? '#f3402b' : '#7e7e7e'"
          @click="isChecked = Number(!isChecked)"
        ></uni-icons>
        <view>
          已阅读并同意
          <text class="text" @click="handleOpenWebClick">《小E商城用户协议》</text>
          <text class="text" @click="handleOpenWebClick">《小E商城隐私政策》</text>
          <text class="text" @click="handleOpenWebClick">《小E账号用户协议》</text>
          <text class="text" @click="handleOpenWebClick">《小E账号隐私政策》</text>
        </view>
      </view>
      <button class="btn" form-type="submit">
        {{ isPwd ? "登 录" : "获取验证码" }}
      </button>
    </form>
    <view class="other-method">
      <view v-if="isPwd" class="is-pwd">
        <view>忘记密码</view>
        <view @click="isPwd = false">验证码登录</view>
      </view>
      <view v-else @click="isPwd = true" class="is-no-pwd">密码登录</view>
    </view>
    <!-- #ifdef H5 -->
    <otherLogin></otherLogin>
    <!-- #endif -->
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMyStore } from "@/store/my";
import otherLogin from "./cpns/other-login.vue";
import { phoneFormatterRef } from "@/utils/index";
import { useTips } from "@/utils/tips";
import tips from "@/components/tips.vue";

const myStore = useMyStore();
const isPwd = ref(false);
const isChecked = ref(0);
const phoneValue = phoneFormatterRef("");
const tipsRef = ref<InstanceType<typeof tips>>();

function handleSubmitClick(e: any) {
  let { phone, password } = e.detail.value;
  phone = phone.replace(/\s/g, "");
  const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  if (!phone) {
    useTips(tipsRef, "账号不能为空");
    return;
  }
  if (!password && isPwd.value) {
    useTips(tipsRef, "密码不能为空");
    return;
  }
  if (!isChecked.value) {
    useTips(tipsRef, "请勾选协议");
    return;
  }
  if (phoneReg.test(phone) === false) {
    useTips(tipsRef, "账号格式不对");
    return;
  }
  uni.setStorageSync("phone", phone);
  if (isPwd.value) {
    myStore.fetchLogin({ phone, password }).then((res) => {
      if (res === "success") {
        useTips(tipsRef, "登录成功");
        uni.setStorageSync("isLogin", true);
        setTimeout(() => {
          uni.switchTab({
            url: "/pages/home/home",
          });
        }, 1000);
      } else {
        useTips(tipsRef, "账号或者密码错误");
      }
    });
  } else {
    uni.navigateTo({
      url: "/pages/validate/validate",
    });
  }
}

// 点击用户协议
function handleOpenWebClick() {
  uni.navigateTo({
    url:
      "/subPages/webview/webview?url=" +
      "https://484869326.github.io/staticPage/webview.html",
  });
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  padding: 30rpx;
  background-color: white;
  height: calc(100vh - var(--window-top));
  box-sizing: border-box;
  .logo {
    margin: 20rpx 0 50rpx;
    .image {
      width: 150rpx;
      margin: auto;
    }
  }
  .form {
    .input {
      margin: 30rpx 0;
      padding: 30rpx;
      font-size: 32rpx;
      border-radius: 20rpx;
      background-color: #f9f9f9;
    }
    .protocol {
      @include normalFlex(row, flex-start, flex-start);
      font-size: $gFontSize;
      .text {
        color: $gPriceColor;
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
  .other-method {
    color: #4d4d4d;
    font-size: $gFontSize;
    .is-no-pwd {
      text-align: center;
    }
    .is-pwd {
      @include normalFlex(row, space-between);
    }
  }
}
</style>
