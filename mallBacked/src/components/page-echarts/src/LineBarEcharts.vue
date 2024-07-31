<template>
  <div class="line-bar-echarts">
    <DiyEcharts :options="options"></DiyEcharts>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import DiyEcharts from "@/base-ui/echart";
import type { EChartsCoreOption } from "echarts";

const props = withDefaults(
  defineProps<{
    title?: string;
    xLabels: string[];
    values: any[];
    isDark: boolean;
  }>(),
  { title: "", isDark: false }
);
const options = computed<EChartsCoreOption>(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999"
      }
    },
    formatter: function (params: any) {
      return "销售额：" + params[0].value + "元";
    }
  },
  legend: {
    textStyle: {
      color: props.isDark ? "#fff" : "#606266"
    }
  },
  grid: {
    left: "2%",
    right: "5%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      type: "category",
      data: props.xLabels,
      axisPointer: {
        type: "shadow"
      },
      axisLabel: {
        color: props.isDark ? "#fff" : "#606266"
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        color: props.isDark ? "#fff" : "#606266",
        formatter: "{value} 元"
      }
    }
  ],
  series: [
    {
      name: "销售额",
      type: "bar",
      data: props.values
    },
    {
      name: "销售额",
      type: "line",
      data: props.values
    }
  ]
}));
</script>

<style scoped></style>
