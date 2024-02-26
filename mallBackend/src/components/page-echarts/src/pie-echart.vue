<template>
  <div class="pieEchart">
    <DiyEchart :options="options"></DiyEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DiyEchart from '@/base-ui/echart';
import { IDataType } from '../type';
import { EChartsOption } from 'echarts';

const props = defineProps<{
  pieData: IDataType[];
}>();
const options = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: props.pieData
    }
  ]
}));
</script>

<style scoped></style>
