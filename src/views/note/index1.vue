<template>
  <div class="container" :ref="setContainerRef">
    <!--拖动区域-->
    <section class="drag-area" :ref="setDragDomRef">drag-area</section>
    <!--拖动按钮-->
    <div class="drag-tip" :ref="setDragBtnRef" @mousedown="onmousedown"></div>
    <section class="content">content</section>
  </div>
</template>
<script>
import { onBeforeUpdate } from 'vue';
export default {
  setup() {
    let container = null;
    let dragBtn = null;
    let dragDom = null;
    const setContainerRef = (el) => {
      container = el;
    };
    const setDragBtnRef = (el) => {
      dragBtn = el;
    };
    const setDragDomRef = (el) => {
      dragDom = el;
    };
    const onmousedown = (e) => {
      // 鼠标的X轴坐标
      let clientX = e.clientX;
      // 拖动块距离屏幕左侧的偏移量
      let offsetLeft = dragBtn.offsetLeft;
      // 鼠标移动
      document.onmousemove = function(e) {
        let curDist = offsetLeft + (e.clientX - clientX), // 拖动块的移动距离
          maxDist = container.clientWidth - dragBtn.offsetWidth; // 拖动块的最大移动距离
        // 边界值处理
        curDist < 0 && (curDist = 0);
        curDist > maxDist && (curDist = maxDist);

        // 设置值（保证拖动块一直在拖动盒子的相对位置）
        dragDom.style.width = curDist + 'px';
        return false;
      };
      // 鼠标松开
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
        // 释放鼠标
        dragBtn.releaseCapture && dragBtn.releaseCapture();
      };
      // 捕获鼠标
      dragBtn.setCapture && dragBtn.setCapture();
      return false;
    };

    onBeforeUpdate(() => {
      container = null;
      dragBtn = null;
      dragDom = null;
    });
    return { setContainerRef, setDragBtnRef, setDragDomRef, onmousedown };
  },
};
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
  height: 100%;
  background-color: #fffaf4;
}
.drag-tip {
  height: 100%;
  width: 6px;
  background-color: transparent;
}
/*鼠标移入显示可拖动样式*/
.drag-tip:hover {
  cursor: w-resize;
}
.content {
  flex: 1;
}
</style>
