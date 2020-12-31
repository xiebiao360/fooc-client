<template>
  <div class="container" :ref="setContainerRef">
    <!--拖动区域-->
    <section class="drag-area" :ref="setDragDomRef">
      <slot name="side"></slot>
    </section>
    <!--拖动按钮-->
    <div class="drag-tip" :ref="setDragBtnRef" @mousedown="onmousedown"></div>
    <section class="content">
      <slot></slot>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUpdate } from 'vue';
export default defineComponent({
  name: 'MyDropPanel',
  setup() {
    let container: HTMLElement | null;
    let dragBtn: HTMLElement | null;
    let dragDom: HTMLElement | null;
    const setContainerRef = (el: HTMLElement) => {
      container = el;
    };
    const setDragBtnRef = (el: HTMLElement) => {
      dragBtn = el;
    };
    const setDragDomRef = (el: HTMLElement) => {
      dragDom = el;
    };
    const onmousedown = (e: MouseEvent) => {
      // 鼠标的X轴坐标
      let clientX = e.clientX;
      // 拖动块距离屏幕左侧的偏移量
      let offsetLeft = (dragBtn as HTMLElement).offsetLeft;
      // 鼠标移动
      document.onmousemove = function (e: MouseEvent) {
        let curDist = offsetLeft + (e.clientX - clientX), // 拖动块的移动距离
          maxDist = (container as HTMLElement).clientWidth - (dragBtn as HTMLElement).offsetWidth; // 拖动块的最大移动距离
        // 边界值处理
        curDist < 0 && (curDist = 0);
        curDist > maxDist && (curDist = maxDist);

        // 设置值（保证拖动块一直在拖动盒子的相对位置）
        (dragDom as HTMLElement).style.width = curDist + 'px';
        return false;
      };
      // 鼠标松开
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };

    onBeforeUpdate(() => {
      container = null;
      dragBtn = null;
      dragDom = null;
    });
    return { setContainerRef, setDragBtnRef, setDragDomRef, onmousedown };
  },
});
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}
.drag-area {
  width: 250px;
  /*设置拖拽盒子的最小值，当拖拽的值小于这个值，将不再因拖拽而继续变小*/
  min-width: 100px;
  max-width: 500px;
  height: 100%;
  background-color: #fffaf4;
}
.drag-tip {
  height: 100%;
  width: 3px;
  /* background-color: transparent; */
  background-color: #f2f6f3;
}
/*鼠标移入显示可拖动样式*/
.drag-tip:hover {
  cursor: w-resize;
}
.content {
  flex: 1;
}
</style>
