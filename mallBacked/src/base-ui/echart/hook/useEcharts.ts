import * as echarts from "echarts";
// import { useThemeStore } from "@/store/theme";

export default function useEcharts(el: HTMLElement) {
  //暂时不用  状态库来 给 echarts dark
  // const echartInstance = echarts.init(el, useThemeStore().themeAppearance);
  const echartInstance = echarts.init(el);
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };
  const reSize = () => {
    echartInstance.resize();
  };
  window.addEventListener("resize", () => {
    echartInstance.resize();
  });
  return { echartInstance, setOptions, reSize };
}
