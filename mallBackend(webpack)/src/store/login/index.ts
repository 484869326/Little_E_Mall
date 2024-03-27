import { Module } from 'vuex';
import { ILoginState } from './type';
import { IRootState, ILoginResult } from '../type';
import { accountLoginRequest, accountMenuRequest } from '@/service/login';
import router from '@/router';
import LocalCache from '@/utils/cache';
import { mapMenusToRouter } from '@/utils/map-menus';
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      getMenu: {},
      userInfo: {}
    };
  },
  getters: {},
  mutations: {
    changeUserInfo(state, userInfo: ILoginResult) {
      state.userInfo = userInfo;
    },
    changeGetMenu(state, getMenu: ILoginResult) {
      state.getMenu = getMenu;
      const routes = mapMenusToRouter(state.getMenu);
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: any) {
      console.log('执行loginModule');
      try {
        const res = await accountLoginRequest(payload);
        if (res.data != null) {
          const menu = await accountMenuRequest();
          commit('changeGetMenu', menu.data);
          commit('changeUserInfo', res.data);
          LocalCache.setCache('userinfo', res.data);
          LocalCache.setCache('getMenu', menu.data);
          dispatch('getDataAction', null, { root: true });

          ElMessage.success('登录成功！');
          setTimeout(() => {
            ElMessage.closeAll();
            router.push('/main');
          }, 1000);
        } else {
          ElMessage.error('账号密码错误，请重新输入');
        }
      } catch (error) {
        ElMessage.error('api接口出错');
      }
    },
    loadLocalLogin({ commit, dispatch }) {
      const userinfo = LocalCache.getCache('userinfo');
      if (userinfo) {
        commit('changeUserInfo', userinfo);
      }
      const getMenu = LocalCache.getCache('getMenu');
      if (getMenu) {
        commit('changeGetMenu', getMenu);
      }
      dispatch('getDataAction', null, { root: true });
    }
  }
};
export default loginModule;
