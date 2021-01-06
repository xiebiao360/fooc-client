<template>
  <div class="container">
    <app-view class="view">
      <app-sidebar class="sidebar"></app-sidebar>
      <app-content class="content"></app-content>
    </app-view>
  </div>
</template>
<script>
import AppView from './app-view';
import AppSidebar from './app-sidebar';
import AppContent from './app-content';
export default {
  components: {  AppView, AppSidebar, AppContent },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .nav {
    height: 40px;
    line-height: 40px;
    border-top: solid 1px #e4e7ed;
    border-bottom: solid 1px #e4e7ed;
  }
  .view {
    flex: 1;
    display: flex;
    .sidebar {
      width: 60px;
      background-color: #333333;
    }
    .content {
      flex: 1;
    }
  }
}
</style>
