<template>
  <div class="pie-echarts">
    <DiyEcharts :options="options"></DiyEcharts>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import DiyEcharts from "@/base-ui/echart";
import type { IDataType } from "../type";
import type { EChartsCoreOption } from "echarts";

const props = withDefaults(
  defineProps<{
    pieData: IDataType[];
    isDark: boolean;
  }>(),
  { isDark: false }
);

const options = computed<EChartsCoreOption>(() => ({
  tooltip: {
    trigger: "item"
  },
  legend: {
    top: "5%",
    left: "center",
    textStyle: {
      color: props.isDark ? "#fff" : "#606266"
    }
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
          color: props.isDark ? "#fff" : "#606266"
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
