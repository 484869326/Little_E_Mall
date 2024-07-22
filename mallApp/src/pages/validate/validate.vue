<template>
  <view class="validate">
    <verificationCode v-if="state" @updateState="state = false"></verificationCode>
    <password v-else></password>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import verificationCode from "./cnaps/code.vue";
import password from "./cnaps/password.vue";

//默认进来是验证码状态(未注册的要输入密码，注册过的会直接跳到登录)
const state = ref(true);
</script>

<style lang="scss" scoped>
.validate {
  padding: 30rpx;
  height: 100vh;
  background-color: #ffffff;
}
</style>
