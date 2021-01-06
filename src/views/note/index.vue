<template>
  <my-drop-panel>
    <template v-slot:side>
      <a-directory-tree :tree-data="treeData"></a-directory-tree>
    </template>
    <!-- <a-button @click="handleClick">open message</a-button> -->
    <foo-editor />
  </my-drop-panel>
</template>
<script>
import { getCurrentInstance, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import FooEditor from '@/components/foo-editor';
export default {
  components: { FooEditor },
  setup() {
    const {
      appContext: {
        config: { globalProperties: ctx },
      },
    } = getCurrentInstance();
    const handleClick = () => {
      ctx.$message.success('my message');
    };
    const { state, dispatch } = useStore();
    onMounted(() => {
      dispatch('note/loadFileTreeData');
    });
    return {
      handleClick,
      treeData: computed(() => state.note.fileTreeData),
    };
  },
};
</script>
