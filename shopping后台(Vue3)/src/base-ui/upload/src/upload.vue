<template>
  <div class="upload">
    <el-upload
      :action="actionUrl"
      :list-type="listType"
      :class="listType == 'text' ? 'avatar-uploader' : ''"
      :on-success="handleAvatarSuccess"
      :show-file-list="false"
    >
      <img v-if="imageShow" :src="imageShow" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <i-ep-plus></i-ep-plus>
      </el-icon>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import type ImageItem from '../type';
import type { UploadProps } from 'element-plus';
export default defineComponent({
  props: {
    listType: {
      type: String as PropType<ImageItem>,
      default: 'text'
    },
    imageUrl: {
      type: String,
      default: ''
    },
    actionUrl: {
      type: String,
      default: 'api/good/sendFILE'
    }
  },
  setup(props) {
    const imageShow = ref(props.imageUrl);
    const handleAvatarSuccess: UploadProps['onSuccess'] = (
      response,
      uploadFile
    ) => {
      if (uploadFile.raw) {
        imageShow.value = URL.createObjectURL(uploadFile.raw);
      }
    };
    return { imageShow, handleAvatarSuccess };
  }
});
</script>

<style scoped lang="less">
.upload {
  width: 100%;
  height: 100%;
  .avatar-uploader {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
}
</style>
<style>
.avatar-uploader {
  .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
  }
  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
}
</style>
