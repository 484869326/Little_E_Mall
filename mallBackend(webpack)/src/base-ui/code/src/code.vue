<template>
  <div class="hy-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
export default defineComponent({
  props: {
    language: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const highlightedCode = ref<string>('');

    watchEffect(() => {
      highlightedCode.value = hljs.highlight(props.code, {
        language: props.language
      }).value;
    });

    return {
      highlightedCode
    };
  }
});
</script>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
