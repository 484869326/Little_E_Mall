<template>
  <view class="search-list">
    <view class="tab-controll">
      <template v-for="(item, index) in tabList" :key="item.field">
        <view
          class="tab-controll-item"
          :class="{ active: index === tabControllIndex }"
          @click="tabControllIndex = index"
        >
          {{ item.text }}
          <uni-icons
            type="up"
            size="24rpx"
            :color="tabControllIndex === index ? '#f3402b' : '#7e7e7e'"
            v-if="item.isSort"
          ></uni-icons>
        </view>
      </template>
    </view>
    <view class="search-good-list">
      <template v-if="localSearchList.length !== 0">
        <view
          class="good-item"
          v-for="item in localSearchList"
          :key="item.Goodid"
          @click="handleGoToDetail(item.Goodid)"
        >
          <view class="good-image">
            <img :src="item.Goodimg" class="image" />
          </view>
          <view class="good-info">
            <view class="good-title">{{ item.Goodname }}</view>
            <view class="good-advertise">{{ item.advertise }}</view>
            <view class="good-explain">{{
              item.Explain.replace(/,/g, " | ")
            }}</view>
            <view class="good-price">￥{{ item.price.split(",")[0] }}起</view>
          </view>
        </view>
      </template>
      <template v-else>
        <view class="search-good-list-null">没有找到相关产品</view>
      </template>
    </view>
  </view>
</template>

<script setup>
import { ref, watch, reactive } from "vue";
import { useSearchStore } from "@/store/search";
import { storeToRefs } from "pinia";

const props = defineProps(["searchValue"]);
const searchStore = useSearchStore();
const { searchList } = storeToRefs(searchStore);
const localSearchList = reactive([]);
watch(
  searchList,
  (newValue) => {
    if (newValue.length > 0) {
      localSearchList.push(...newValue);
    }
  },
  { immediate: true }
);
let page = 1;
const tabControllIndex = ref(0);
const tabList = [
  {
    field: "comprehensive",
    text: "综合",
    isSort: false,
  },
  {
    field: "salesVolume",
    text: "销量",
    isSort: false,
  },
  {
    field: "price",
    text: "价格",
    isSort: true,
  },
  {
    field: "newProductPriority",
    text: "新品优先",
    isSort: false,
  },
  {
    field: "screen",
    text: "筛选",
    isSort: false,
  },
];
// 去详细页
function handleGoToDetail(id) {
  uni.navigateTo({
    url: `/pages/detail/detail?goodid=${id}`,
  });
}
async function loadMore() {
  page++;
  await searchStore.fetchSearchList(props.searchValue, page);
}
defineExpose({
  loadMore,
});
</script>

<style lang="scss" scoped>
.search-list {
  .tab-controll {
    @include normalFlex(row, space-between);
    padding: 20rpx 30rpx;
    background-color: white;
    .tab-controll-item {
      font-size: $gFontSize;
      color: $gFontGrayColor;
      &.active {
        color: $gPriceColor;
      }
    }
  }
  .search-good-list {
    padding: 20rpx 30rpx;
    .good-item {
      @include normalFlex(row, flex-start);
      padding: 25rpx 30rpx;
      background-color: white;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
      .good-image {
        width: 240rpx;
        margin-right: 20rpx;
      }
      .good-info {
        flex-grow: 1;
        font-size: $gFontSize;
        color: #222222;
        .good-title {
          font-size: 40rpx;
          font-weight: bold;
        }
        .good-advertise {
          margin: 10rpx 0;
          color: $gFontGrayColor;
        }
        .good-explain {
          margin: 10rpx 0;
          color: $gFontGrayColor;
        }
        .good-price {
          font-size: 32rpx;
          font-weight: bold;
        }
      }
    }
    .search-good-list-null {
      height: 300rpx;
      line-height: 300rpx;
      text-align: center;
    }
  }
}
</style>
