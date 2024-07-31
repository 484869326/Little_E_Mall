import { computed } from "vue";
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
