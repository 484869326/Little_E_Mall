import { computed } from 'vue';
//双向绑定，避免不是单向数据流
export function useVModel(props: any, propName: string, emit: any) {
  const weakMap = new WeakMap();

  return computed({
    get() {
      if (weakMap.has(props[propName])) {
        return weakMap.get(props[propName]);
      }
      const proxy = new Proxy(props[propName], {
        get: (target, key) => {
          return Reflect.get(target, key);
        },
        set: (target, key, newValue) => {
          // console.log(key);
          // console.log(newValue);
          emit(`update:${propName}`, { ...target, [key]: newValue });
          return true;
        }
      });
      weakMap.set(props[propName], proxy);
      return proxy;
    },
    set(newValue) {
      emit(`update:${propName}`, newValue);
    }
  });
}
