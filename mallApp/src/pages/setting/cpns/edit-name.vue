<template>
  <view class="edit-name">
    <input
      type="text"
      name="nick-name"
      v-model="userInfoComputed.nickName"
      class="input"
    />
    <view class="btn-group">
      <button class="btn button" @click="handleChangeNameClick">完成</button>
      <button class="button" type="primary" @click="$emit('close')">返回</button>
    </view>
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my";
import { useTips } from "@/utils/tips";
import tips from "@/components/tips.vue";

const emit = defineEmits(["close"]);
const myStore = useMyStore();
const { userInfo } = storeToRefs(myStore);
const tipsRef = ref<InstanceType<typeof tips>>();
const userInfoComputed = computed(() => {
  return Object.assign({}, userInfo.value);
});
async function handleChangeNameClick() {
  const msg = await myStore.fetchUpdateUserInfo(
    userInfoComputed.value.id,
    userInfoComputed.value
  );
  if (msg === "校验失败") {
    useTips(tipsRef, "名字格式为(4-10个字符)");
  } else if (msg === "更新失败") {
    useTips(tipsRef, "更新失败");
  } else {
    Object.assign(userInfo.value, userInfoComputed.value);
    emit("close");
  }
}
</script>

<style lang="scss" scoped>
.edit-name {
  padding-top: 40rpx;
  position: relative;
  .input {
    padding: 20rpx 10rpx;
    background-color: white;
  }
  .btn-group {
    position: absolute;
    margin-top: 40rpx;
    padding: 0 30rpx;
    top: 100%;
    width: 100%;
    box-sizing: border-box;
    .button {
      border-radius: 9999rpx;
    }
    .btn {
      margin-bottom: 30rpx;
      color: white;
      background-color: $gPriceColor;
    }
  }
}
</style>
