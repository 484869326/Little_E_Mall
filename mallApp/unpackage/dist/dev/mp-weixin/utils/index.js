"use strict";
function debounce(fn, interval, immediate = true) {
  let timer = null;
  let isInvoke = false;
  const _debounce = function(...payload) {
    return new Promise((resolve) => {
      if (timer)
        clearTimeout(timer);
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
function throttle(fn, interval, options = {
  leading: false,
  trailing: false
}) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;
  const _throttle = (...args) => {
    const nowTime = (/* @__PURE__ */ new Date()).getTime();
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
        lastTime = leading ? (/* @__PURE__ */ new Date()).getTime() : 0;
        timer = null;
      }, remainTime);
    }
  };
  return _throttle;
}
function deepClone(originValue, map = /* @__PURE__ */ new WeakMap()) {
  if (typeof originValue !== "object" || originValue === null || originValue === void 0) {
    return originValue;
  }
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }
  if (originValue instanceof Set) {
    return /* @__PURE__ */ new Set([...originValue]);
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
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.throttle = throttle;
