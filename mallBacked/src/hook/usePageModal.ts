import PageModal from "@/components/PageModal.vue";
import { ref } from "vue";

type callBackFn = (item?: any) => void;

export function usePageModal(addCallback?: callBackFn, editCallback?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const title = ref("");
  const handleAddData = () => {
    if (pageModalRef.value) {
      defaultInfo.value = {};
      addCallback && addCallback();
      pageModalRef.value.setCenterDialogVisible();
      title.value = "新增界面";
    }
  };
  const handleEditData = async (item: any) => {
    if (pageModalRef.value) {
      defaultInfo.value = { ...item };
      editCallback && editCallback(item);
      pageModalRef.value.setCenterDialogVisible();
      title.value = "编辑界面";
    }
  };
  return {
    handleAddData,
    handleEditData,
    defaultInfo,
    pageModalRef,
    title
  };
}
