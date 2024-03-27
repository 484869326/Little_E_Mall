<template>
  <div class="echarts">
    <div ref="echartsRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import useEcharts from "../hook/useEcharts";
import type { EChartsOption } from "echarts";

const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
  }>(),
  {
    width: "100%",
    height: "280px"
  }
);
const echartsRef = ref<HTMLElement>();
onMounted(() => {
  if (echartsRef.value) {
    const { setOptions } = useEcharts(echartsRef.value);
    watchEffect(() => {
      setOptions(props.options);
    });
  }
});
</script>

<style lang="scss" scoped></style>
