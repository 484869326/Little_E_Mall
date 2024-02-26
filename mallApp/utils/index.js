import { customRef } from "vue";
//防抖
function debounce(fn, interval, immediate = true) {
  let timer = null;
  let isInvoke = false;
  const _debounce = function (...payload) {
    return new Promise((resolve) => {
      if (timer) clearTimeout(timer);
      if (!isInvoke && immediate) {
        const result = fn.apply(this, payload);
        resolve(result);
        timer = null;
        isInvoke = true;
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, payload);
          resolve(result);
          timer = null;
          isInvoke = false;
        }, interval);
      }
    });
  };
  return _debounce;
}
// 节流
function throttle(
  fn,
  interval,
  options = {
    leading: false,
    trailing: false,
  }
) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;
  const _throttle = (...args) => {
    const nowTime = new Date().getTime();
    if (!lastTime && !leading) {
      lastTime = nowTime;
    }
    const remainTime = interval - (nowTime - lastTime);
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (remainTime <= 0) {
      timer = null;
      fn.apply(this, args);
      lastTime = nowTime;
      timer = null;
    } else if (trailing && !timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastTime = leading ? new Date().getTime() : 0;
        timer = null;
      }, remainTime);
    }
  };
  return _throttle;
}
//深拷贝
function deepClone(originValue, map = new WeakMap()) {
  if (
    typeof originValue !== "object" ||
    originValue === null ||
    originValue === undefined
  ) {
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
  const newObject = Array.isArray(originValue) ? [] : {};
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
//customRef(给手机 xxx xxxx xxx 格式化 目前先这样，后续复用性高再重新改)
function phoneFormatterRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return phoneFormatter(value);
      },
      set(newValue) {
        value = newValue.replace(/\s/g, "");
        trigger();
      },
    };
  });
}
function phoneFormatter(value) {
  if (!value) return "";
  const arr = value.split("");
  arr.length > 2 && arr.splice(3, 0, " ");
  arr.length > 7 && arr.splice(8, 0, " ");
  return arr.join("");
}
function countdown(seconds, callBack) {
  const timer = setInterval(() => {
    seconds--;
    if (callBack) {
      //闭包返回操作让别人可以拿到变量
      callBack(seconds);
    }
    if (seconds === 0) {
      clearTimeout(timer);
    }
  }, 1000);
}
export {
  debounce,
  throttle,
  deepClone,
  phoneFormatter,
  phoneFormatterRef,
  countdown,
};
