<template>
  <div class="upload-ui">
    <ElUpload
      :action="actionUrl"
      :list-type="listType"
      :class="listType == 'text' ? 'avatar-uploader' : ''"
      :on-success="handleAvatarSuccess"
      :show-file-list="showList"
      v-model:file-list="fileList"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <template v-if="listType === 'text' && imageShow">
        <img :src="imageShow" class="avatar" :alt="imageShow" />
      </template>
      <template v-else>
        <ElIcon class="avatar-uploader-icon">
          <IEpPlus></IEpPlus>
        </ElIcon>
      </template>
    </ElUpload>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { ImageItem } from "@/types/baseUI";
import { formatProcessUrl } from "@/utils/dataFormat";
import type { UploadProps, UploadUserFile } from "element-plus";

const props = defineProps({
  listType: {
    type: String as PropType<ImageItem>,
    required: true
  },
  modelValue: {
    type: [String, Array] as PropType<any>,
    default: ""
  },
  actionUrl: {
    type: String,
    default: import.meta.env.VITE_UPLOAD
  }
});
const emit = defineEmits(["update:modelValue"]);
let imageShow: any;
let modelList: any;
const fileList = ref<UploadUserFile[]>([]);
let showList = false;
//判断是什么类型
if (props.listType === "text") {
  imageShow = ref(props.modelValue);
  emit("update:modelValue", formatProcessUrl(props.modelValue));
} else {
  showList = true;
  modelList = ref([...props.modelValue]);
  modelList.value.forEach((item: string, index: number) => {
    fileList.value.push({ name: index.toString(), url: item });
    modelList.value[index] = formatProcessUrl(item);
  });
  emit("update:modelValue", modelList.value);
}
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
//移除图片
const handleRemove: UploadProps["onRemove"] = (uploadFile) => {
  const res: any = uploadFile.response;
  const url = res?.data ?? formatProcessUrl(uploadFile.url ?? "");
  const index = modelList.value.findIndex((item: any) => item === url);
  modelList.value.splice(index, 1);
  emit("update:modelValue", modelList.value);
};
//预览图片
const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  if (uploadFile.url) {
    dialogImageUrl.value = uploadFile.url;
  }
  dialogVisible.value = true;
};
//成功上传
const handleAvatarSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  if (uploadFile.raw) {
    let url = response.data;
    if (props.listType === "text") {
      emit("update:modelValue", url);
      imageShow.value = URL.createObjectURL(uploadFile.raw);
    } else {
      modelList.value.push(url);
      emit("update:modelValue", modelList.value);
    }
  }
};
</script>
<style scoped lang="scss">
.upload-ui {
  width: 100%;
  height: 100%;
  .avatar-uploader {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    :deep(.el-upload) {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
      .el-upload:hover {
        border-color: var(--el-color-primary);
      }
      .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
      }
    }
  }
}
</style>
