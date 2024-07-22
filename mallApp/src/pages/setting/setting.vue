<template>
  <view class="setting">
    <template v-if="status === 0">
      <view class="setting-info">
        <view
          v-for="item in userList"
          :key="item.text"
          class="user-list"
          @click.prevent="item.click"
        >
          <view class="left">{{ item.text }}</view>
          <view class="right">
            <template v-if="item.type === 'image'">
              <!-- #ifndef H5  -->
              <image
                class="image"
                :src="item.value"
                :lazy-load="true"
                mode="widthFix"
              ></image>
              <!-- #endif  -->
              <!-- #ifdef H5  -->
              <img class="image" :src="item.value" />
              <!-- #endif  -->
            </template>
            <text v-else>{{ item.value }}</text>
            <uni-icons type="right" size="36rpx" color="#C3C3C3"></uni-icons>
          </view>
        </view>
      </view>
    </template>
    <template v-else-if="status === 1">
      <editName @close="status = 0"></editName>
    </template>
    <template v-else-if="status === 2">
      <editGender @close="status = 0"></editGender>
    </template>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my";
import editName from "./cpns/edit-name.vue";
import editGender from "./cpns/edit-gender.vue";
import userImage from "@/static/user.png";

const status = ref(0);
const props = defineProps();
const myStore = useMyStore();
const { userInfo } = storeToRefs(myStore);
const userList = computed(() => {
  const { id, avatarUrl, nickName, gender } = userInfo.value;
  return [
    {
      text: "头像",
      type: "image",
      value: avatarUrl || userImage,
      click: () => {
        // 就这里需要上传图片 后面有时间了再来改
        uni.chooseImage({
          success: (chooseImageRes) => {
            const tempFilePaths = chooseImageRes.tempFilePaths;
            uni.uploadFile({
              url: "http://localhost:3333/api/sendFile",
              filePath: tempFilePaths[0],
              name: "file",
              success: (uploadFileRes) => {
                const res = JSON.parse(uploadFileRes.data);
                myStore.fetchUpdateUserInfo(id, {
                  ...userInfo.value,
                  avatarUrl: res.data,
                  isField: true,
                });
                userInfo.value.avatarUrl = "http://localhost:3333/" + res.data;
              },
            });
          },
        });
      },
    },
    {
      text: "昵称",
      value: nickName ?? "",
      click: () => {
        status.value = 1;
      },
    },
    {
      text: "性别",
      value: gender ? "女" : "男",
      click: () => {
        status.value = 2;
      },
    },
    {
      text: "收货地址",
      click: () => {
        uni.navigateTo({
          url: "/subPages/receivingAddress/receivingAddress",
        });
      },
    },
    {
      text: "退出登录",
      click: () => {
        uni.showModal({
          content: "是否退出登录?",
          success: function (res) {
            if (res.confirm) {
              uni.removeStorageSync("isLogin");
              uni.removeStorageSync("phone");
              userInfo.value = {};
              uni.switchTab({
                url: "/pages/my/my",
              });
            }
          },
        });
      },
    },
  ];
});
</script>

<style lang="scss" scoped>
.setting {
  .setting-info {
    padding: 0 30rpx 0;
    background-color: white;
    .user-list {
      @include normalFlex(row, space-between);
      padding: 30rpx 0;
      border-bottom: 1px solid #e2e2e2;
      &:first-child {
        padding: 20rpx 0;
      }
      &:last-child {
        border-bottom-color: transparent;
      }
      .right {
        @include normalFlex();
        .image {
          width: 80rpx;
        }
      }
    }
  }
}
</style>
