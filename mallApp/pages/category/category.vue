<template>
  <view class="category">
    <!-- 左边 -->
    <categoryMenu
      :categories="categoryList"
      v-model:currentIndex="parentID"
    ></categoryMenu>
    <!-- 右边 -->
    <scroll-view class="content-scroll" scroll-y="true" :scroll-top="scrollTop">
      <categoryContent
        :subCategory="subCategory"
        :parentID="parentID"
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
const parentID = ref(0);
onLoad(async () => {
  await categoryStore.fetchCategoryList();
  parentID.value = categoryList.value[0].Cid;
});
const scrollTop = ref(0);
watch(parentID, () => {
  console.log(scrollTop.value);
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
