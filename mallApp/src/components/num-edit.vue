<template>
  <view class="num-edit">
    <text
      class="reduce"
      :style="{ background: numValue <= 1 ? '#B3B3B3' : 'black' }"
      @click="handleReduceClick"
    ></text>
    <text class="num">{{ numValue }}</text>
    <uni-icons
      type="plusempty"
      size="40rpx"
      color="black"
      class="add"
      @click="
        $emit('update:modelValue', numValue + 1);
        emit('change', 1);
      "
    ></uni-icons>
  </view>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: Number, default: 1 },
});
const emit = defineEmits(["update:modelValue", "change"]);
const numValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newValue) => {
    numValue.value = newValue;
  }
);
function handleReduceClick() {
  if (numValue.value > 1) {
    emit("update:modelValue", numValue.value - 1);
    emit("change", -1);
  }
}
</script>

<style lang="scss">
.num-edit {
  @include normalFlex();
  .reduce {
    width: 36rpx;
    height: 6rpx;
  }
  .num {
    padding: 10rpx 50rpx;
    background-color: #f9f9f9;
  }
}
</style>
