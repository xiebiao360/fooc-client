<template>
  <div
    v-if="active === item.name"
    class="box-item"
    style="background-color:#ebeef5;"
  >
    <img
      :src="imageUrl(item.activeIcon)"
      alt="item.title"
      width="18"
      height="18"
    />
  </div>
  <div v-else class="box-item">
    <img :src="imageUrl(item.icon)" alt="item.title" width="18" height="18" />
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const imageUrl = (icon) => require(`../assets/icon/${icon}.png`);
    const { state } = useStore();
    return {
      imageUrl,
      active: computed(() => state.menu.active),
    };
  },
};
</script>
<style lang="scss" scoped>
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
</style>
