import { IForm } from '@/base-ui/form';
import { getPageListData } from '@/service/main/system';

export const modelConfig: IForm = {
  formItems: [
    {
      field: 'Cname',
      type: 'input',
      label: '类别名',
      rules: [],
      placeholder: '请输入类别名'
    },
    {
      field: 'level',
      type: 'select',
      label: '层级',
      rules: [],
      placeholder: '请选择层级',
      options: [
        {
          label: '第一分类',
          value: 0
        },
        {
          label: '第二分类',
          value: 1
        },
        {
          label: '第三分类',
          value: 2
        }
      ],
      isChange: async (formItems: any, value: any) => {
        //隐藏列表
        const categoryParentItem = formItems.find((item: any) => {
          return item.field === 'parentID';
        });
        const categoryImgItem = formItems.find((item: any) => {
          return item.field === 'Cimg';
        });
        if (value === 0) {
          categoryParentItem.isHidden = true;
          categoryImgItem.isHidden = false;
        } else if (value === 1) {
          categoryImgItem.isHidden = true;
          categoryParentItem.isHidden = false;
        } else {
          categoryImgItem.isHidden = true;
          categoryParentItem.isHidden = false;
        }
        const { data } = await getPageListData(
          `/good/selectCategory/${value - 1}`,
          {}
        );
        categoryParentItem.options = [{ label: ' ', value: 0 }].concat(
          data.map((item: any) => {
            return { label: item.Cname, value: item.Cid };
          })
        );
      }
    },
    {
      field: 'parentID',
      type: 'select',
      label: '上层类别',
      rules: [],
      placeholder: '请输入上层类别',
      options: []
    },
    {
      field: 'Cimg',
      type: 'upload',
      label: '图片',
      rules: [],
      listType: 'text'
    }
  ],
  labelWidth: '100px',
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: '5px'
  }
};
