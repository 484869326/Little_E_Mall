// 提示用的，暂时只有文本
import { createApp, defineComponent, h } from "vue";

const tipsBox = defineComponent({
  name: "tipsBox",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    //先生成个遮罩，不让用户乱点
    return () =>
      h(
        "div",
        {
          style: {
            position: "fixed",
            top: "0",
            width: "100vw",
            height: "100vh",
            zIndex: "9999",
          },
        },
        h(
          "div",
          {
            style: {
              position: "absolute",
              padding: "30rpx 60rpx",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: "#343434",
              color: "#F8EDDF",
              borderRadius: "10rpx",
              width: props.content.length < 30 ? "max-content" : "auto",
            },
          },
          props.content
        )
      );
  },
});
export function tips(content, time = 1000) {
  let div = document.querySelector("#tips-box");
  if (div) return;
  const app = createApp(tipsBox, { content });
  div = document.createElement("div");
  div.id = "tips-box";
  document.body.appendChild(div);
  app.mount(div);
  setTimeout(() => {
    app.unmount(div);
    div.remove();
  }, time);
}
