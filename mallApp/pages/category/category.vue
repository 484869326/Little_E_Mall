<template>
  <view class="category">
    <!-- 左边 -->
    <categoryMenu
      :categories="categoryList"
      v-model:currentIndex="parentId"
    ></categoryMenu>
    <!-- 右边 -->
    <scroll-view class="content-scroll" scroll-y="true" :scroll-top="scrollTop">
      <categoryContent
        :subCategory="subCategory"
        :parentId="parentId"
      ></categoryContent>
    </scroll-view>
  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/store/category.js";
import categoryMenu from "./cpns/category-menu.vue";
import categoryContent from "./cpns/category-content.vue";

const categoryStore = useCategoryStore();
const { categoryList, subCategory } = storeToRefs(categoryStore);
const parentId = ref(0);
onLoad(async () => {
  await categoryStore.fetchCategoryList();
  parentId.value = categoryList.value[0].cid;
});
const scrollTop = ref(0);
</script>

<style lang="scss">
page {
  background-color: #ffffff;
  height: 100%;
}
.category {
  display: flex;
  height: 100%;
}
</style>
