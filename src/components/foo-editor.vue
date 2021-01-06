<template>
  <div>
    <div :ref="setEditorRef"></div>
  </div>
</template>
<script>
import { onBeforeUpdate, onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
export default {
  setup() {
    let editorRef = null;
    const setEditorRef = (el) => {
      editorRef = el;
    };
    onMounted(() => {
      new Quill(editorRef, {
        theme: 'snow',
        scrollingContainer: 'body',
      });
    });
    onBeforeUpdate(() => {
      editorRef = null;
    });
    return {
      setEditorRef,
      editorRef,
    };
  },
};
</script>
