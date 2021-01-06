<template>
  <router-view></router-view>
</template>

<script>
import { toRaw } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'App',
  setup() {
    const { state, commit } = useStore();
    if (localStorage.getItem('store.menu.customMenus')) {
      commit(
        'menu/loadCustomMenus',
        JSON.parse(localStorage.getItem('store.menu.customMenus'))
      );
    }
    if (localStorage.getItem('store.menu.sysMenus')) {
      commit(
        'menu/loadSysMenus',
        JSON.parse(localStorage.getItem('store.menu.sysMenus'))
      );
    }
    if (localStorage.getItem('store.menu.active')) {
      commit(
        'menu/changeActive',
        JSON.parse(localStorage.getItem('store.menu.active'))
      );
    }
    window.addEventListener('beforeunload', () => {
      localStorage.setItem(
        'store.menu.customMenus',
        JSON.stringify(toRaw(state.menu.customMenus))
      );
      localStorage.setItem(
        'store.menu.sysMenus',
        JSON.stringify(toRaw(state.menu.sysMenus))
      );
      localStorage.setItem(
        'store.menu.active',
        JSON.stringify(toRaw(state.menu.active))
      );
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
