import { getTreeData } from '@/api/note';
export default {
  namespaced: true,
  state: () => ({
    fileTreeData: [],
  }),
  mutations: {
    loadFileTreeData(state, treeDatas) {
      state.fileTreeData = [...treeDatas];
    },
  },
  actions: {
    loadFileTreeData({ commit }) {
      getTreeData().then((res) => {
        if (res) {
          commit('loadFileTreeData', res.data);
        }
      });
    },
  },
};
