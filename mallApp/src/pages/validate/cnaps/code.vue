<template>
  <view class="code">
    <view class="title">请输入验证码</view>
    <view class="code-content">已发送至{{ phoneFormatter(phone) }}</view>
    <view class="code-form">
      <template v-for="(item, index) in 6" :key="item">
        <!-- :focus="inputFocusArr[index]"这是为了下一个自动聚焦 -->
        <input
          type="number"
          :maxlength="1"
          :data-index="index"
          class="code-input"
          :class="{ 'input-focus': inputFocusArr[index] }"
          :focus="inputFocusArr[index]"
          @focus="inputFocusArr[index] = true"
          @blur="inputFocusArr[index] = false"
          @input="handleInput"
          @keyup.delete="handleKeyUp"
          v-model="formData[index]"
        />
      </template>
    </view>
    <view class="count-down" :class="{ diabled: second !== 0 }" @click="handleGetCode">{{
      second === 0 ? "获取验证码" : second + "秒重新获取验证码"
    }}</view>
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, watch } from "vue";
import { useMyStore } from "@/store/my";
import { phoneFormatter, countdown } from "@/utils";
import { useTips } from "@/utils/tips";
import tips from "@/components/tips.vue";

const emit = defineEmits(["updateState"]);
const myStore = useMyStore();
const phone = uni.getStorageSync("phone");
const second = ref(0);
const tipsRef = ref<InstanceType<typeof tips>>();

//判断返回键是去除值还是直接回退
let canBack = true;
//聚焦数组
const inputFocusArr = reactive([false, false, false, false, false, false]);
//每一项的值
const formData = reactive(["", "", "", "", "", ""]);
watch(formData, async (newVal) => {
  const code = newVal.join("");
  if (code.length === 6) {
    const msg = await myStore.fetchVerifyCode({ phone, code });
    if (msg === "register") {
      setTimeout(() => {
        emit("updateState");
      }, 100);
    } else if (msg === "success") {
      useTips(tipsRef, "登录成功");
      uni.setStorageSync("isLogin", true);
      setTimeout(() => {
        uni.switchTab({
          url: "/pages/home/home",
        });
      }, 1000);
    } else {
      useTips(tipsRef, "验证码错误");
    }
  }
});
//重新获取验证码
async function handleGetCode() {
  if (second.value !== 0) return;
  const { msg } = await myStore.fetchGetCode(phone);
  useTips(tipsRef, `验证码为${msg}(有效期1分钟)`, 2000);
  countDownFn();
}
function countDownFn() {
  countdown(5, (newVal) => {
    second.value = newVal;
  });
}
//正在输入
function handleInput(event: any) {
  const index = event.target.dataset.index;
  const value = event.detail.value;
  if (value === "" && index !== 0) {
    canBack = false;
  }
  if (value && index < inputFocusArr.length - 1) {
    inputFocusArr[index] = false;
    inputFocusArr[index + 1] = true;
  }
}
//键盘操作(返回删除操作)
function handleKeyUp(event: any) {
  const index = event.target.dataset.index;
  if (index === 0) return;
  if (!canBack) {
    canBack = true;
    return;
  }
  inputFocusArr[index] = false;
  inputFocusArr[index - 1] = true;
  formData[index - 1] = "";
}
//黏贴操作
function pasteFn(event: any) {
  //获取复制的文本
  const pastedText = (event.clipboardData || (window as any).clipboardData).getData(
    "text"
  );
  // 看看现在谁聚焦
  let focusIndex = inputFocusArr.indexOf(true);
  // 有值才往下走
  if (pastedText) {
    const arr = pastedText.split("");
    for (const item of arr) {
      // 过滤非数字字符
      if (/\d/.test(item)) {
        formData[focusIndex] = item;
        if (focusIndex === inputFocusArr.length - 1) {
          break;
        }
        inputFocusArr[focusIndex] = false;
        inputFocusArr[++focusIndex] = true;
      }
    }
  }
}
onMounted(() => {
  handleGetCode();
  document.addEventListener("paste", pasteFn);
});
onUnmounted(() => {
  document.removeEventListener("paste", pasteFn);
});
</script>

<style lang="scss" scoped>
.code {
  .title {
    margin: 40rpx 0 30rpx;
    padding-left: 0;
    font-size: 38rpx;
  }
  .code-content {
    font-size: $gFontSize;
    color: #404040;
    margin-bottom: 30px;
  }
  .code-form {
    .code-input {
      display: inline-block;
      width: 12%;
      padding-bottom: 20rpx;
      border-bottom: 1px solid #b1b1b1;
      margin-right: 4.66%;
      text-align: center;
      // 兼容苹果浏览器不然位置会往下跑
      vertical-align: top;
      &:last-child {
        margin-right: 0;
      }
      &.input-focus {
        border-bottom-color: $gPriceColor;
      }
    }
  }
  .count-down {
    margin-top: 20rpx;
    font-size: $gFontSize;
    &.diabled {
      pointer-events: none;
      color: #bababa;
    }
  }
}
</style>
