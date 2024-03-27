import { IBreadCrumb } from '@/base-ui/breadcrumb';
import { RouteRecordRaw } from 'vue-router';
//记住菜单地址，默认进入首页的地址
let firstMenu: any = null;
//动态添加路由
export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.level !== 0 || menu.children.length === 0) {
        const route = allRoutes.find((route) => {
          return route.path == menu.path;
        });
        if (!firstMenu) {
          firstMenu = menu;
        }
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
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
    if (menu.level !== 0 || menu.children.length === 0) {
      if (menu.path == currentPath) {
        //2.解决订单管理,而且不影响数组的重复
        breadCrumb?.push({ name: menu.text });
        return menu;
      }
    } else {
      //1.这里默认不传数组
      const findMenu = pathMapToMenu(menu.children, currentPath);
      if (findMenu) {
        breadCrumb?.push({ name: menu.text });
        breadCrumb?.push({ name: findMenu.text });
        return findMenu;
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
      if (menu.type == 1 || menu.type == 2) {
        _recurseGetPermission(menu.children ?? []);
      } else {
        permissions.push(menu.permissions);
      }
    }
    return permissions;
  };
  _recurseGetPermission(userMenus);
}

export { firstMenu };
