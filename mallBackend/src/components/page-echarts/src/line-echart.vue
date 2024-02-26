<template>
  <div class="lineEchart">
    <DiyEchart :options="options"></DiyEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DiyEchart from '@/base-ui/echart';
import { EChartsOption } from 'echarts';

const props = withDefaults(
  defineProps<{
    title?: string;
    xLabels: string[];
    values: any[];
  }>(),
  { title: '' }
);
const options = computed<EChartsOption>(() => ({
  title: {
    text: props.title
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {},
  grid: {
    left: '2%',
    right: '5%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '近七日订单数',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: props.values
    }
  ]
}));
</script>

<style scoped></style>
