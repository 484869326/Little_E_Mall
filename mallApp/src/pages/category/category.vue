<template>
  <view class="category">
    <!-- 左边 -->
    <categoryMenu
      :categories="categoryList"
      v-model:currentIndex="parentId"
    ></categoryMenu>
    <!-- 右边 -->
    <scroll-view class="content-scroll" :scroll-y="true" :scroll-top="scrollTop">
      <categoryContent :subCategory="subCategory" :parentId="parentId"></categoryContent>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/store/category";
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
watchEffect(() => {
  //变化的时候跳转到顶部
  parentId.value;
  scrollTop.value === 0 ? (scrollTop.value = 1) : (scrollTop.value = 0);
});
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
