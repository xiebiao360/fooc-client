<template>
  <my-drop-panel>
    <template v-slot:side>
      <div>{{ message }}</div>
    </template>
    <div>{{ message }}</div>
  </my-drop-panel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const message = ref<string>('my meffffssage');
    return { message };
  },
});
</script>
