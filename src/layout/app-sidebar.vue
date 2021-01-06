<template>
  <div class="side-container">
    <div class="content">
      <div v-for="item in customMenus" :key="item.title" class="box">
        <div @click="onclick(item.name, item.path)">
          <side-img-box :item="item" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div v-for="item in sysMenus" :key="item.title" class="box">
        <div @click="onclick(item.name, item.path)">
          <side-img-box :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import SideImgBox from './side-img-box';
export default {
  components: { SideImgBox },
  setup() {
    const { state, commit } = useStore();
    const active = computed(() => state.menu.active);
    const customMenus = computed(() => state.menu.customMenus);
    const getImgPath = (icon) => require(`../assets/icon/${icon}.png`);
    const { replace, currentRoute } = useRouter();
    onMounted(() => {
      const { matched } = currentRoute.value;
      if (matched.length > 0 && matched[0].name !== active.value) {
        const activeMenu = Array.from(toRaw(customMenus.value)).find(
          (f) => f.name === active.value
        );
        if (activeMenu) {
          replace(activeMenu.path);
        } else {
          commit('menu/changeActive', 'home');
        }
      }
    });
    const onclick = (name, path) => {
      if (active.value !== name) {
        commit('menu/changeActive', name);
        replace(path);
      }
    };
    return {
      active,
      getImgPath,
      onclick,
      customMenus,
      sysMenus: computed(() => state.menu.sysMenus),
    };
  },
};
</script>
<style lang="scss" scoped>
.side-container {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  .content {
    flex: 1;
  }
  .bottom {
    height: 120px;
  }
}
.box {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    &:hover {
      background-color: gray;
    }
  }
}
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}
input {
  -webkit-user-select: auto; /*webkit浏览器*/
}
textarea {
  -webkit-user-select: auto; /*webkit浏览器*/
}
</style>
