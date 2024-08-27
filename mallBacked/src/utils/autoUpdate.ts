//提示浏览器自动更新
import { ElMessageBox } from "element-plus";

let lastSrcs: any;
const DURATION = import.meta.env.VITE_AUTO_UPDATE_TIME;

const scriptReg = /<script.*src=["'](?<src>[^"']+)/gm;

const extractNewScripts = async () => {
  const html = await fetch("./?_timestamp=" + Date.now()).then((resp) => resp.text());
  scriptReg.lastIndex = 0;
  let result = [];
  let match: RegExpExecArray;
  while ((match = scriptReg.exec(html) as RegExpExecArray)) {
    result.push(match.groups?.src);
  }
  return result;
};

const needUpdate = async () => {
  const newScripts = await extractNewScripts();
  if (!lastSrcs) {
    lastSrcs = newScripts;
    return false;
  }
  let result = false;
  if (lastSrcs.length !== newScripts.length) {
    result = true;
  }
  for (let i = 0; i < lastSrcs.length; i++) {
    if (lastSrcs[i] !== newScripts[i]) {
      result = true;
      break;
    }
  }
  lastSrcs = newScripts;
  return result;
};

function autoRefresh() {
  setTimeout(async () => {
    const willUpdate = await needUpdate();
    if (willUpdate) {
      await ElMessageBox.confirm("为了你的使用体验，请点击确认更新页面", "提醒", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      });
      location.reload();
    }
    autoRefresh();
  }, DURATION);
}
autoRefresh();
