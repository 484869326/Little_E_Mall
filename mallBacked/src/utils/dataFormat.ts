// 数据格式校验工具类

import dayjs from "dayjs";
//格式化时间
export function formatUtcToString(utcString: string, format = "YYYY-MM-DD HH:mm") {
  return dayjs(utcString).format(format);
}
//格式化图片路径
export function formatProcessUrl(url: string) {
  if (!url) return "";
  const startPos = url.indexOf("/image/");
  if (startPos !== -1) {
    return "." + url.substring(startPos);
  }
  return url;
}
//检验是否是svg标签
export function isValidSvg(rule: any, value: any, callback: any) {
  if (value !== "") {
    // 创建一个 DOMParser 实例
    const parser = new DOMParser();
    // 解析 SVG 字符串
    const doc = parser.parseFromString(value, "image/svg+xml");
    // 检查解析结果是否包含一个有效的 SVG 元素
    const result = doc.documentElement.nodeName === "svg";
    if (result) {
      callback();
    } else {
      callback(new Error("字体图标格式不对"));
    }
  }
}

export function validateSelect(rule: any, value: any, callback: any) {
  if (value === 0) {
    callback(new Error("不能为空"));
  } else {
    callback();
  }
}

//累加
export function reduce(arr: string | any[]): number {
  let newArr = arr;
  if (typeof newArr === "string") {
    newArr = newArr.split(",");
  }
  return newArr.reduce((p: any, c: any) => {
    return p + Number(c);
  }, 0);
}
