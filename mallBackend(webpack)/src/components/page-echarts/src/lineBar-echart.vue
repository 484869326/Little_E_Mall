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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {},
  xAxis: [
    {
      type: 'category',
      data: props.xLabels,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} 元'
      }
    }
  ],
  series: [
    {
      name: '销售额',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return (value as number) + ' ml';
        }
      },
      data: props.values
    },
    {
      name: '销售额',
      type: 'line',
      tooltip: {
        valueFormatter: function (value) {
          return (value as number) + ' ml';
        }
      },
      data: props.values
    }
  ]
}));
</script>

<style scoped></style>
