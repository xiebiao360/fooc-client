<template>
  <div>
    <a-button @click="onclick">建立socket连接</a-button>
  </div>
</template>
<script>
export default {
  setup() {
    const onclick = () => {
      console.log('建立socket连接');
    };
    return {
      onclick,
    };
  },
};
</script>
