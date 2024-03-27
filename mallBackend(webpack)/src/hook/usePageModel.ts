import pageModel from '@/components/page-model';
import { ref } from 'vue';
type callBackFn = () => void;
export function usePageModel(
  addCallback?: callBackFn,
  editCallback?: callBackFn
) {
  const pageModelRef = ref<InstanceType<typeof pageModel>>();
  const defaultInfo = ref({});
  const title = ref('');
  const handleAddData = () => {
    if (pageModelRef.value) {
      defaultInfo.value = {};
      pageModelRef.value.centerDialogVisible = true;
      addCallback && addCallback();
      title.value = '新增界面';
    }
  };
  const handleEditData = async (item: any) => {
    if (pageModelRef.value) {
      defaultInfo.value = { ...item };
      editCallback && (await editCallback());
      pageModelRef.value && (pageModelRef.value.centerDialogVisible = true);
      title.value = '编辑界面';
    }
  };
  return {
    handleAddData,
    handleEditData,
    defaultInfo,
    pageModelRef,
    title
  };
}
