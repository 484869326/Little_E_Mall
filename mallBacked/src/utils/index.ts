// 工具类

import type { IMenu } from "@/types/login";
// import moment from "moment-timezone";
import "dayjs/locale/es";
import dayjs from "dayjs";
// 延时器
function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

//深拷贝
function deepClone(originValue: any, map = new WeakMap()): any {
  if (typeof originValue !== "object" || originValue === null || originValue === undefined) {
    return originValue;
  }
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description);
  }
  if (typeof originValue === "function") {
    return originValue;
  }
  if (map.has(originValue)) {
    return map.get(originValue);
  }
  const newObject: any = Array.isArray(originValue) ? [] : {};
  map.set(originValue, newObject);
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key], map);
  }
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const sKey of symbolKeys) {
    newObject[sKey] = deepClone(originValue[sKey], map);
  }
  return newObject;
}
//首字母大写
function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCheckMenu(menuList: IMenu[]) {
  const checkedKeys: number[] = [];
  //存父级的
  const halfCheckedKeys: number[] = [];
  const _recurseGetCheckMenu = (menuList: IMenu[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        halfCheckedKeys.push(menu.id);
        _recurseGetCheckMenu(menu.children);
      } else {
        checkedKeys.push(menu.id);
      }
    }
  };
  _recurseGetCheckMenu(menuList);
  return [checkedKeys, halfCheckedKeys];
}
//格式化时间
function formatTime(oldvalue: any, format = "YYYY-MM-DD HH:mm:ss") {
  // return moment(oldvalue).tz("Asia/shanghai").format(format);
  dayjs.locale("es");
  return dayjs(oldvalue).locale("zh-cn").format(format);
}
//返回菜单一级或者二级的
function parentMenuList(level: number, list: IMenu[]) {
  if (level < 1) return [];
  if (level === 2) {
    return list.map((item) => ({
      label: item.text,
      value: item.id
    }));
  }
  return list.flatMap((item) => {
    if (!item.children) return [];
    return item.children.map((children) => ({
      label: children.text,
      value: children.id
    }));
  });
}
export { delay, deepClone, capitalizeFirstLetter, getCheckMenu, formatTime, parentMenuList };
