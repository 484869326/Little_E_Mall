import { secondaryPwd } from "@/utils/secondaryPwd";
import LocalCache from "@/utils/cache";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default {
  meta: {
    title: "角色管理"
  },
  beforeEnter: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    if (to.fullPath === from.fullPath) {
      next();
      return;
    }
    if (LocalCache.getCache("pass")) {
      next();
      return;
    }
    secondaryPwd("21232f297a57a5a743894a0e4a801fc3", next, from);
  }
};
