// 工具类

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
export { delay, deepClone };
