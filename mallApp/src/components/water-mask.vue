<!-- 水印组件 -->
<template>
  <!-- #ifndef H5 -->
  <view class="watermask-container" ref="parent">
    <slot></slot>
    <view :style="style"></view>
  </view>
  <!--  #endif -->
  <!-- #ifdef H5 -->
  <div class="watermask-container" ref="parent">
    <slot></slot>
  </div>
  <!-- #endif -->
</template>

<script setup lang="ts">
import { computed, reactive, onMounted, ref, onUnmounted } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "watermask",
  },
  fontSize: {
    type: Number,
    default: 40,
  },
  gap: {
    type: Number,
    default: 140,
  },
});

//水印盒子样式
const style = reactive({
  position: "absolute",
  backgroundImage: "none",
  backgroundSize: "0px",
  zIndex: "9",
  pointerEvents: "none",
  inset: "0",
});
//创建的dom元素
let div: HTMLDivElement | null = null;
// 父亲元素
const parent = ref();
let bg: any;

function init(props: any) {
  return computed(() => {
    let devicePixelRatio = 1;
    uni.getSystemInfo({
      success(res) {
        devicePixelRatio = res.pixelRatio;
      },
    });
    const canvasSize = 100 + props.gap * devicePixelRatio;
    const canvasWidth = canvasSize;
    const canvasHeight = canvasSize;
    const canvas: any = uni.createOffscreenCanvas({
      type: "2d",
      width: Number(canvasWidth),
      height: Number(canvasHeight),
    });
    const ctx = canvas.getContext("2d");
    if (ctx) {
      dealImage(ctx, canvas, devicePixelRatio);
      return {
        base64: canvas.toDataURL(),
        size: canvasSize / devicePixelRatio,
      };
    } else {
      throw new Error("当前环境不支持Canvas");
    }
  });
}

// #ifdef H5
function initH5(props: any) {
  return computed(() => {
    let canvas;
    canvas = document.createElement("canvas");
    const devicePixelRatio = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width } = ctx.measureText(props.text);
    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    dealImage(ctx, canvas, devicePixelRatio);
    return {
      base64: canvas.toDataURL(),
      size: canvasSize / devicePixelRatio,
    };
  });
}
const ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    const removedNodes = Array.from(entry.removedNodes);
    for (const node of removedNodes) {
      if (node === div) {
        resetWatermask();
      }
    }
    if (entry.target === div) {
      resetWatermask();
    }
  }
});
//被删除后重新创建水印元素
function resetWatermask() {
  if (!parent.value) {
    return;
  }
  if (div) {
    div.remove();
  }
  const { base64, size } = bg;
  div = document.createElement("div");
  div.style.position = style.position;
  div.style.backgroundImage = `url(${base64})`;
  div.style.backgroundSize = `${size}px ${size}px`;
  div.style.zIndex = style.zIndex;
  div.style.pointerEvents = style.pointerEvents;
  div.style.inset = style.inset;
  parent.value.appendChild(div);
}
// #endif

function dealImage(ctx: CanvasRenderingContext2D, canvas: any, devicePixelRatio: number) {
  const fontSize = props.fontSize * devicePixelRatio;
  const font = fontSize + "px serif";
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((Math.PI / 180) * -45);
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(props.text, 0, 0);
}
onMounted(() => {
  //  #ifndef H5
  bg = init(props).value;
  Object.assign(style, {
    backgroundImage: `url(${bg.base64})`,
    backgroundSize: `${bg.size}px ${bg.size}px`,
  });
  //  #endif
  // #ifdef H5
  bg = initH5(props).value;
  resetWatermask();
  ob.observe(parent.value, {
    childList: true,
    subtree: true,
    attributes: true,
  });
  // #endif
});

// #ifdef H5
// 取消监听
onUnmounted(() => {
  ob.disconnect();
});
// #endif
</script>

<style lang="scss">
.watermask-container {
  position: relative;
  overflow: hidden;
}
</style>
