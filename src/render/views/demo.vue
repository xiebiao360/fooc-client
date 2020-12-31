<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const message = ref<string>('my mesddsage');
    return { message };
  },
});
</script>
