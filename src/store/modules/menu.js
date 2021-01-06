export default {
  namespaced: true,
  state: () => ({
    customMenus: [],
    sysMenus: [],
    active: 'home',
  }),
  mutations: {
    loadCustomMenus(state, menus) {
      state.customMenus = [...menus];
    },
    loadSysMenus(state, menus) {
      state.sysMenus = [...menus];
    },
    changeActive(state, active) {
      state.active = active;
    },
  },
};
