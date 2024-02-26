<template>
  <div class="barEchart">
    <DiyEchart :options="options"></DiyEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DiyEchart from '@/base-ui/echart';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
const props = withDefaults(
  defineProps<{
    title?: string;
    xLabels: string[];
    values: any[];
  }>(),
  { title: '' }
);
const options = computed<EChartsOption>(() => ({
  grid: {
    left: '0%',
    right: '0%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    data: props.xLabels,
    axisLabel: {
      inside: true,
      color: 'black',
      formatter: function (value: any) {
        let arr = value.split('');
        return [...arr].join('\n');
      },
      lineHeight: 16
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: 'black'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      data: props.values
    }
  ]
}));
</script>

<style scoped></style>
