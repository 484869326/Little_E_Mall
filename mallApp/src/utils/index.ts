import { customRef } from "vue";
import type { Ref } from "vue";
//防抖
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  interval: number,
  immediate = true
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timer: number | null = null;
  let isInvoke = false;

  const _debounce = function (
    this: any,
    ...payload: Parameters<T>
  ): Promise<ReturnType<T>> {
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
type ThrottleOptions = {
  leading?: boolean;
  trailing?: boolean;
};

function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number,
  options: ThrottleOptions = {
    leading: false,
    trailing: false,
  }
): (...args: Parameters<T>) => void {
  const { leading = false, trailing = false } = options;
  let lastTime = 0;
  let timer: number | null = null;

  const _throttle = function (this: any, ...args: Parameters<T>) {
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
function deepClone(originValue: any, map = new WeakMap<any, any>()) {
  if (
    typeof originValue !== "object" ||
    originValue === null ||
    originValue === undefined
  ) {
    return originValue;
  }
  if (originValue instanceof Map) {
    return new Map([...originValue]) as any;
  }
  if (originValue instanceof Set) {
    return new Set([...originValue]) as any;
  }
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description) as any;
  }
  if (typeof originValue === "function") {
    return originValue;
  }
  if (map.has(originValue)) {
    return map.get(originValue) as any;
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
  return newObject as any;
}
//customRef(给手机 xxx xxxx xxx 格式化 目前先这样，后续复用性高再重新改)
function phoneFormatterRef(value: string): Ref<string> {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return phoneFormatter(value);
      },
      set(newValue: string) {
        value = newValue.replace(/\s/g, "");
        trigger();
      },
    };
  });
}

function phoneFormatter(value: string): string {
  if (!value) return "";
  const arr: string[] = value.split("");
  arr.length > 2 && arr.splice(3, 0, " ");
  arr.length > 7 && arr.splice(8, 0, " ");
  return arr.join("");
}

function countdown(seconds: number, callBack?: (remainingSeconds: number) => void): void {
  const timer = setInterval(() => {
    seconds--;
    if (callBack) {
      callBack(seconds);
    }
    if (seconds === 0) {
      clearTimeout(timer);
    }
  }, 1000);
}
export { debounce, throttle, deepClone, phoneFormatter, phoneFormatterRef, countdown };
