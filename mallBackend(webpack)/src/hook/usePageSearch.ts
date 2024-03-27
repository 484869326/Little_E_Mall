import pageContent from '@/components/page-content';
import { ref } from 'vue';

//搜索hook
export function usePageSearch(SearchFormConfig?: any) {
  const value = {};
  //如果有form有默认值,传过来
  if (SearchFormConfig) {
    SearchFormConfig.formItems.forEach((item: any) => {
      (value as any)[item.field] = item.value ?? '';
    });
  }
  //传递给pageContent的查询参数,分页需要到
  const getFormData = ref(value);
  const pageContentRef = ref<InstanceType<typeof pageContent>>();
  //向子组件的重置按钮
  const handleResetClick = () => {
    if (pageContentRef.value) {
      pageContentRef.value.getPageData();
      getFormData.value = value;
    }
  };
  //向子组件的查询按钮
  const handleQueryClick = (queryInfo: any) => {
    if (pageContentRef.value) {
      pageContentRef.value.getPageData(queryInfo);
      getFormData.value = queryInfo;
    }
  };
  return { pageContentRef, handleResetClick, handleQueryClick, getFormData };
}
