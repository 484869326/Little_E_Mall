<template>
  <div class="user">
    <pageSearch :SearchFormConfig="SearchFormConfig"></pageSearch>
    <pageContent
      :contentTableConfig="contentTableConfig"
      pageName="user"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import pageSearch from '@/components/page-search';
import { defineComponent } from 'vue';
import { SearchFormConfig } from './config/search_config';
import { contentTableConfig } from './config/content_config';
import pageContent from '@/components/page-content';
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    return { contentTableConfig, SearchFormConfig };
  }
});
</script>

<style scoped lang="less"></style>
