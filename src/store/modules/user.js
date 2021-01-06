import { login } from '@/api/user';
import {
  CORE_MENU_CONST,
  CUSTOM_MENU_CONST,
  SYS_MENU_CONST,
} from '@/constants/sysconsts';
import { setToken, removeToken } from '@/utils/auth';

export default {
  namespaced: true,
  state: () => ({
    info: null,
    permissions: [],
  }),
  mutations: {
    loadInfo(state, info) {
      state.info = info;
    },
    loadPermissions(state, permissions) {
      state.permissions = [...permissions];
    },
    cleanInfoAndPermissions(state) {
      state.info = null;
      state.permissions.length = 0;
    },
  },
  actions: {
    login({ commit }, { name, password, verifycode }) {
      return new Promise((resolve, reject) => {
        login({ name, password, verifycode })
          .then((res) => {
            if (res && res.code === '0') {
              const { info, permissions, token } = res.data;
              commit('loadInfo', info);
              commit('loadPermissions', permissions);
              setToken(token, 1); //cookie存储一天
              const customMenus = CUSTOM_MENU_CONST.filter((f) =>
                permissions.includes(f.name)
              );
              commit(
                'menu/loadCustomMenus',
                CORE_MENU_CONST.concat(customMenus),
                { root: true }
              );
              commit('menu/loadSysMenus', SYS_MENU_CONST, { root: true });
              resolve();
            } else {
              reject();
            }
          })
          .catch((err) => reject(err));
      });
    },
    loginout({ commit }) {
      commit('cleanInfoAndPermissions');
      removeToken();
    },
  },
};
