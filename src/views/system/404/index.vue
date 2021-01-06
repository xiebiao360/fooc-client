<template>
  <div>404</div>
  <div>
    <a-button @click="redirectHome">返回首页</a-button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const { replace } = useRouter();
    const redirectHome = () => replace('/home');
    return { redirectHome };
  },
};
</script>
