// 路由工具类
import type { IBreadCrumb } from "@/types/baseUI";
import { capitalizeFirstLetter } from "@/utils";
import { type RouteRecordRaw } from "vue-router";

//记住菜单地址，默认进入首页的地址
let firstMenu: any = null;
//动态添加路由
export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  //路由配置导出
  const routeFiles: Record<string, any> = import.meta.glob("./main/**/*.ts", {
    eager: true,
    import: "default"
  });
  //组件导出(!MainView  route已经导出了。这里不能导出不然打包会有警告)
  const componentFiles: Record<string, any> = import.meta.glob("../views/main/**/!(MainView).vue", {
    eager: true,
    import: "default"
  });
  Object.entries(routeFiles).map(([path, routerConfig]) => {
    path = path.replace("./", "/").replace("/index.ts", "");
    const pathArr = path.split("/");
    const name = pathArr[pathArr.length - 1];
    const componentPath = `../views${path}/${capitalizeFirstLetter(name)}View.vue`;
    allRoutes.push(
      Object.assign(
        {
          path,
          name,
          component: componentFiles[componentPath],
          children: []
        },
        routerConfig
      )
    );
  });
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.level === 2) {
        const route = allRoutes.find((route) => {
          return route.path == menu.path;
        });
        if (!firstMenu) {
          firstMenu = menu;
        }
        if (route) routes.push(route);
      } else if (menu.level === 1) {
        if (!menu.children) {
          const route = allRoutes.find((route) => {
            return route.path == menu.path;
          });
          if (!firstMenu) {
            firstMenu = menu;
          }
          if (route) routes.push(route);
        }
        _recurseGetRoute(menu.children ?? []);
      }
    }
  };
  _recurseGetRoute(userMenus);
  return routes;
}
//左边菜单栏跟着变化
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadCrumb?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.level === 2 && menu.path == currentPath) {
      breadCrumb?.push({ name: menu.text });
      return menu;
    } else if (menu.level === 1) {
      if (!menu.children || menu.children.length === 0) {
        if (menu.path == currentPath) {
          breadCrumb?.push({ name: menu.text });
          return menu;
        }
      } else {
        const findMenu = pathMapToMenu(menu.children, currentPath);
        if (findMenu) {
          breadCrumb?.push({ name: menu.text });
          breadCrumb?.push({ name: findMenu.text });
          return findMenu;
        }
      }
    }
  }
}

//菜单面包屑
export function pathMenuToBread(userMenus: any[], currentPath: string): any {
  const breadCrumb: IBreadCrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadCrumb);
  return breadCrumb;
}
//菜单权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = [];
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.level == 1 || menu.level == 2) {
        _recurseGetPermission(menu.children ?? []);
      } else {
        permissions.push(menu.permission);
      }
    }
  };
  _recurseGetPermission(userMenus);
  return permissions;
}

export { firstMenu };
