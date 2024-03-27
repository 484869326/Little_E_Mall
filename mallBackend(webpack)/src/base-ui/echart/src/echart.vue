<template>
  <div class="echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import useEcharts from '../hook/useEcharts';
import { EChartsOption } from 'echarts';

const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
  }>(),
  {
    width: '100%',
    height: '280px'
  }
);
const echartDivRef = ref<HTMLElement>();
onMounted(() => {
  if (echartDivRef.value) {
    const { setOptions } = useEcharts(echartDivRef.value);
    watchEffect(() => {
      setOptions(props.options);
    });
  }
});
</script>

<style lang="less" scoped></style>
