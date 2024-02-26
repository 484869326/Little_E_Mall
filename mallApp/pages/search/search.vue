<template>
  <view class="search">
    <view
      class="search-box"
      :style="{
        height: searchList.length === 0 || !isSearch ? 'auto' : '100vh',
      }"
    >
      <view
        class="search-content-input"
        @click="!isSearch && (isSearch = true)"
      >
        <view class="uni-search-bar">
          <uni-search-bar
            @confirm="search"
            v-model="searchValue"
            radius="100"
            :readonly="!isSearch"
            cancelButton="none"
            @clear="searchList.length = 0"
          >
          </uni-search-bar>
        </view>
        <text class="text" @click.stop="search" v-if="isSearch">搜索</text>
        <template v-else>
          <view class="search-value-box">
            <view class="search-value"> {{ searchValue }}</view>
            <uni-icons
              type="closeempty"
              size="30rpx"
              color="#AEAEAE"
              @click="searchValue = ''"
            ></uni-icons>
          </view>
        </template>
      </view>
      <view
        class="search-content-list"
        v-if="searchList.length !== 0 && isSearch"
      >
        <view
          v-for="item in searchList"
          :key="item.Goodid"
          class="search-content-item"
          @click="handleItemClick(item.Goodid, item.Goodname)"
        >
          {{ item.Goodname }}
        </view>
      </view>
    </view>
    <!-- 微信小程序不让Component -->
    <searchContent
      v-if="isSearch"
      :searchValue="searchValue"
      @searchClick="handleSearchClick"
      @deleteStorage="localHistoryList.length = 0"
    ></searchContent>
    <searchGoodList
      v-else
      ref="searchGoodListRef"
      :searchValue="searchValue"
    ></searchGoodList>
  </view>
</template>

<script setup>
import { onLoad, onReachBottom } from "@dcloudio/uni-app";
import { ref, watch, onMounted } from "vue";
import { useSearchStore } from "@/store/search";
import { storeToRefs } from "pinia";
import searchContent from "./cpns/search-content.vue";
import searchGoodList from "./cpns/search-good-list.vue";

const searchStore = useSearchStore();
const { searchList } = storeToRefs(searchStore);
const searchValue = ref("");
const isSearch = ref(true);
const searchGoodListRef = ref();
watch(searchValue, async (newValue) => {
  if (!newValue) {
    searchList.value.length = 0;
    return;
  }
  await searchStore.fetchSearchList(newValue, 1);
});
const localHistoryList =
  uni.getStorageSync("SEARCH_HISTORY").length === 0
    ? []
    : uni.getStorageSync("SEARCH_HISTORY").split(",");
// 赋值本地缓存 历史记录
function setLocalStorage(value) {
  const index = localHistoryList.indexOf(value);
  if (index !== -1) {
    localHistoryList.splice(index, 1);
  }
  localHistoryList.unshift(value);
  uni.setStorageSync("SEARCH_HISTORY", localHistoryList.join(","));
}
// 按下回车和搜索文字
async function search() {
  isSearch.value = false;
  setLocalStorage(searchValue.value);
}

//点击展示的东西，并且放到历史记录的最前面
function handleItemClick(id, value) {
  setLocalStorage(value);
  uni.navigateTo({
    url: `/pages/detail/detail?goodid=${id}`,
  });
  searchValue.value = "";
  searchList.value.length = 0;
}
// 历史记录点击搜索
function handleSearchClick(value) {
  setLocalStorage(value);
  isSearch.value = false;
  searchValue.value = value;
}
onMounted(() => {
  searchList.value.length = 0;
});
// 搜索页默认加载
onLoad((option) => {
  if (option.searchValue) {
    searchValue.value = option.searchValue;
    setLocalStorage(searchValue.value);
    isSearch.value = false;
  }
});
onReachBottom(() => {
  if (searchGoodListRef.value) {
    searchGoodListRef.value?.loadMore();
  }
});
</script>

<style lang="scss" scoped>
.search {
  .search-box {
    @include normalFlex(column, center, initial);
    .search-content-input {
      position: relative;
      @include normalFlex();
      overflow: hidden;
      background-color: white;
      .uni-search-bar {
        flex-grow: 1;
        :deep(.uni-searchbar) {
          .uni-input-input {
            &:disabled {
              //因为readonly属性，所以需要设置pointer-events属性
              pointer-events: none;
              opacity: 0;
            }
          }
        }
      }
      .search-value-box {
        @include normalFlex(row, flex-start);
        position: absolute;
        left: 80rpx;
        background-color: white;
        font-size: $gFontSize;
        padding: 5rpx 20rpx;
        border-radius: 9999rpx;
        .search-value {
          max-width: 300rpx;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .text {
        font-size: $gFontSize;
        margin-right: 20rpx;
      }
    }
    .search-content-list {
      flex-grow: 1;
      background-color: $gBgColor;
      .search-content-item {
        padding: 30rpx 20rpx;
        font-size: $gFontSize;
        border-bottom: 1px solid #eeeeee;
      }
    }
  }
}
</style>
