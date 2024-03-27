import type { App, DirectiveBinding } from "vue";
// import highLightJs from "highlight.js";
import highLightJs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import "highlight.js/styles/github.css";

highLightJs.registerLanguage("bash", bash);

export default {
  install(app: App) {
    //代码高亮指令 args 传参比入 html,javascript value就是 文本内容
    app.directive("code", {
      mounted(el: any, binding: DirectiveBinding) {
        const { value, arg } = binding;
        const html = highLightJs.highlight(value, { language: arg || "" }).value;
        const pre = document.createElement("pre");
        pre.style.padding = "10px";
        const code = document.createElement("code");
        code.className = `language-${arg}` || "";
        code.innerHTML = html;
        pre.appendChild(code);
        el.appendChild(pre);
      }
    });
  }
};
