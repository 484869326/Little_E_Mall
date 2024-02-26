<template>
  <view class="search-content">
    <view class="search-history" v-if="historyList.length !== 0">
      <view class="search-history-title">
        <text class="text">搜索历史</text>
        <uni-icons
          type="trash"
          size="38rpx"
          color="black"
          @click="handleRemoveStorageClick"
        ></uni-icons>
      </view>
      <view
        class="history-list"
        :style="{ 'max-height': historyListHeight[range] }"
      >
        <view class="history-list-box">
          <template v-for="item in historyList" :key="item">
            <!-- 列表展示隐藏图标 -->
            <view
              class="history-item icon"
              v-if="item === 'icon'"
              @click="handleChangeShowClick"
            >
              <uni-icons
                :type="range === 'min' ? 'down' : 'up'"
                size="30rpx"
                color="black"
              ></uni-icons>
            </view>
            <view
              class="history-item"
              v-else
              @click="$emit('searchClick', item)"
            >
              {{ item }}
            </view>
          </template>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onShow, onHide } from "@dcloudio/uni-app";
import { ref, reactive, computed, onMounted, getCurrentInstance } from "vue";

const emit = defineEmits(["searchClick", "deleteStorage"]);
//图标位置
let iconIndex = 0;
const range = ref("min");
const instance = getCurrentInstance();
const localHistoryList = reactive([]);
const historyList = computed(() => {
  return localHistoryList;
});
const historyListHeight = reactive({
  min: "160rpx",
  max: "0px",
});
//去除搜索记录本地缓存
function handleRemoveStorageClick() {
  uni.showModal({
    content: "是否删除全部搜索历史记录",
    success: function (res) {
      if (res.confirm) {
        uni.removeStorageSync("SEARCH_HISTORY");
        localHistoryList.length = 0;
        emit("deleteStorage");
      }
    },
  });
}
//改变图标位置和展示
function handleChangeShowClick() {
  const isMin = range.value === "min";
  if (isMin) {
    range.value = "max";
    localHistoryList.splice(iconIndex, 1);
    localHistoryList.push("icon");
  } else {
    range.value = "min";
    localHistoryList.splice(localHistoryList.length - 1, 1);
    localHistoryList.splice(iconIndex, 0, "icon");
  }
}
function initDom(isTrue) {
  if (localHistoryList.length > 0 && isTrue) {
    //获取最大高度
    uni
      .createSelectorQuery()
      .in(instance)
      .select(".history-list-box")
      .boundingClientRect((data) => {
        const height = data.height;
        historyListHeight.max = height + "px";
      })
      .exec();
    //获取图标位置
    uni
      .createSelectorQuery()
      .in(instance)
      .selectAll(".history-item")
      .boundingClientRect((data) => {
        let topSet = new Set();
        let inserted = 0;
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (!topSet.has(item.top)) {
            topSet.add(item.top);
            inserted++;
            if (inserted === 3) {
              const itemWidth = data[i - 1].width;
              iconIndex = itemWidth < 40 ? i - 1 : i;
              localHistoryList.splice(iconIndex, 0, "icon");
              break;
            }
          }
        }
      })
      .exec();
  }
}
onMounted(() => {
  initDom(true);
});
//让第一次不执行用的
let isTrue = false;
onHide(() => {
  isTrue = true;
});
onShow(() => {
  // 页面显示隐藏更新搜索历史记录
  localHistoryList.length = 0;
  localHistoryList.push(
    ...(uni.getStorageSync("SEARCH_HISTORY").length === 0
      ? []
      : uni.getStorageSync("SEARCH_HISTORY").split(","))
  );
  //先这样后面再看看解决方法
  setTimeout(() => {
    initDom(isTrue);
  }, 500);
});
</script>

<style lang="scss" scoped>
.search-content {
  .search-history {
    padding: 20rpx;
    .search-history-title {
      @include normalFlex(row, space-between);
      margin: 10rpx 0;
      .text {
        font-size: 32rpx;
        font-weight: bold;
        color: #232323;
      }
    }
    .history-list {
      overflow: hidden;
      .history-list-box {
        @include normalFlex(row, flex-start);
        flex-wrap: wrap;
        .history-item {
          max-width: 300rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 20rpx;
          padding: 10rpx 20rpx;
          background-color: #ffffff;
          border-radius: 10rpx;
          font-size: 24rpx;
          box-sizing: border-box;
          margin-right: 20rpx;
          &.icon {
            margin-right: 0;
            padding: 10rpx;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
