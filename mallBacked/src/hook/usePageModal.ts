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
      pageModalRef.value.centerDialogVisible = true;
      addCallback && addCallback();
      title.value = "新增界面";
    }
  };
  const handleEditData = async (item: any) => {
    if (pageModalRef.value) {
      defaultInfo.value = { ...item };
      editCallback && editCallback(item);
      pageModalRef.value && (pageModalRef.value.centerDialogVisible = true);
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
