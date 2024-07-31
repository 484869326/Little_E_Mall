// 按需引入减少包体积
import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart } from "echarts/charts";
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  DataZoomComponent
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  DataZoomComponent
]);
export default function useEcharts(el: HTMLElement) {
  const echartInstance = echarts.init(el);
  const setOptions = (options: echarts.EChartsCoreOption) => {
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
