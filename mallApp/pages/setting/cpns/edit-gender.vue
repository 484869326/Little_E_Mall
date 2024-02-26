<template>
  <view class="edit-gender">
    <view class="select">
      <view
        class="option"
        :class="{ active: gender === '男' }"
        @click="handleChangeGenderClick('男')"
        >男</view
      >
      <view
        class="option"
        :class="{ active: gender === '女' }"
        @click="handleChangeGenderClick('女')"
        >女</view
      >
    </view>
    <view class="btn-group">
      <button class="button" type="primary" @click="$emit('close')">
        返回
      </button>
    </view></view
  >
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my.js";
import { tips } from "@/utils/tips.js";

const emit = defineEmits(["close"]);
const myStore = useMyStore();
const { userInfo } = storeToRefs(myStore);
const gender = ref(userInfo.value.gender);
async function handleChangeGenderClick(sex) {
  gender.value = sex;
  const msg = await myStore.fetchUpdateUserInfo(userInfo.value.id, {
    ...userInfo.value,
    gender: sex,
  });
  if (msg === "更新失败") {
    tips("更新失败");
  } else {
    Object.assign(userInfo.value, { ...userInfo.value, gender: sex });
  }
}
</script>

<style lang="scss" scoped>
.edit-gender {
  .select {
    padding: 20rpx 0;
    background-color: white;
    .option {
      padding: 20rpx 40rpx;
      &.active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  .btn-group {
    margin-top: 40rpx;
    width: 100%;
    padding: 0 30rpx;
    box-sizing: border-box;
    .button {
      border-radius: 9999rpx;
    }
  }
}
</style>
