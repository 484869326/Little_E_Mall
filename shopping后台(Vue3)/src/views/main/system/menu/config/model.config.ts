import { IForm } from '@/base-ui/form';

export const modelConfig: IForm = {
  formItems: [
    {
      field: 'text',
      type: 'input',
      label: '菜单名',
      rules: [],
      placeholder: '请输入菜单名'
    },
    {
      field: 'icon',
      type: 'input',
      label: '字体图标',
      rules: [],
      placeholder: '请输入字体图标'
    },
    {
      field: 'level',
      type: 'select',
      label: '层级',
      rules: [],
      placeholder: '请选择层级',
      options: [
        {
          label: '一级菜单',
          value: 0
        },
        {
          label: '二级菜单',
          value: 1
        }
      ],
      isChange: (formItems: any, value: any) => {
        formItems.forEach((item: any) => {
          if (item.field === 'path' || item.field === 'parentID') {
            if (value) {
              item.isHidden = false;
            } else {
              item.isHidden = true;
            }
          }
        });
      }
    },
    {
      field: 'path',
      type: 'input',
      label: '路径',
      rules: [],
      placeholder: '请输入路径'
    },
    {
      field: 'parentID',
      type: 'select',
      label: '上级菜单',
      rules: [],
      options: []
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
