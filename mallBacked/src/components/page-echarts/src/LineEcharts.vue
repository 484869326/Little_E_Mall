<template>
  <div class="line-echarts">
    <DiyEcharts :options="options"></DiyEcharts>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import DiyEcharts from "@/base-ui/echart";
import type { EChartsOption } from "echarts";

const props = withDefaults(
  defineProps<{
    title?: string;
    xLabels: string[];
    values: any[];
    isDark: boolean;
  }>(),
  { title: "", isDark: false }
);
const options = computed<EChartsOption>(() => ({
  title: {
    text: props.title
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985"
      }
    }
  },
  legend: {
    textStyle: {
      color: props.isDark ? "#fff" : "#606266"
    }
  },
  grid: {
    left: "5%",
    right: "8%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: props.xLabels,
      axisLabel: {
        color: props.isDark ? "#fff" : "#606266"
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        color: props.isDark ? "#fff" : "#606266"
      }
    }
  ],
  series: [
    {
      name: "近七日订单数",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series"
      },
      data: props.values
    }
  ]
}));
</script>

<style scoped></style>
