import * as echarts from 'echarts';

export default function useEcharts(el: HTMLElement) {
  const echartInstance = echarts.init(el);
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };
  const reSize = () => {
    echartInstance.resize();
  };
  window.addEventListener('resize', () => {
    echartInstance.resize();
  });
  return { echartInstance, setOptions, reSize };
}
