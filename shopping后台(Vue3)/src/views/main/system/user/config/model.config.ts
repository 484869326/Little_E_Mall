import { IForm } from '@/base-ui/form';

export const modelConfig: IForm = {
  formItems: [
    {
      field: 'nickName',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'gender',
      type: 'select',
      label: '性别',
      rules: [],
      placeholder: '请选择性别',
      options: [
        {
          label: '男',
          value: '男'
        },
        {
          label: '女',
          value: '女'
        }
      ]
    },
    {
      field: 'avatarUrl',
      type: 'upload',
      label: '头像',
      listType: 'text'
    },
    {
      field: 'city',
      type: 'input',
      label: '城市',
      rules: [],
      placeholder: '请输入城市'
    },
    {
      field: 'phone',
      type: 'input',
      label: '手机号',
      rules: [],
      placeholder: '请输入手机号'
    },
    {
      field: 'Status',
      type: 'switch',
      label: '状态',
      rules: []
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
