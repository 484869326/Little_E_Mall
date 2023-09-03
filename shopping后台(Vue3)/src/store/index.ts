import { getPageListData } from '@/service/main/system';
import { createStore, Store, useStore as useVuexStore } from 'vuex';
import loginModule from './login';
import systemModule from './system';
import statisticsModule from './statistics';

import { IRootState, IStoreType } from './type';

const store = createStore<IRootState>({
  state: () => {
    return {
      entireCategory: []
    };
  },
  getters: {},
  mutations: {
    changeEntireCategpry(state, entireCategory) {
      state.entireCategory = entireCategory;
    }
  },
  actions: {
    async getDataAction({ commit }) {
      const { data: entireCategory } = await getPageListData(
        '/good/selectCategory/2',
        {}
      );
      commit('changeEntireCategpry', entireCategory);
    }
  },
  modules: {
    loginModule,
    systemModule,
    statisticsModule
  }
});
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
