//生成泡泡
function bubbleCreate() {
  const _bubbleCreate = () => {
    // 获取body元素
    const body = document.body;
    // 创建泡泡元素
    const bubble = document.createElement("span");
    //设置泡泡样式
    bubble.className = "bubble";
    // 设置泡泡半径
    const r = Math.random() * 5 + 25; //半径大小为25~30
    // 设置泡泡的宽高
    bubble.style.width = r + "px";
    bubble.style.height = r + "px";
    const randomX = Math.random() * innerWidth - 2 * r;
    // b设置泡泡的随机起点
    bubble.style.left = randomX + "px";
    // 为body添加bubble元素
    body.append(bubble);
    // 4s清除一次泡泡
    setTimeout(() => {
      bubble && bubble.remove();
    }, 4000);
  };
  return _bubbleCreate();
}
let setIntervalTime: null | number = null;
export const bubbleDom: { mount: () => void; unmount: () => void } = {
  //定时生成泡泡
  mount: (seconds: number = 200) => {
    setIntervalTime = setInterval(() => {
      bubbleCreate();
    }, seconds);
  },
  //销毁泡泡
  unmount: () => {
    //先进行清除定时器
    setIntervalTime && clearInterval(setIntervalTime);
    setIntervalTime = null;
    document.querySelectorAll(".bubble").forEach((item) => {
      item.remove();
    });
  }
};
