import { IForm } from '@/base-ui/form';

export const modelConfig: IForm = {
  formItems: [
    {
      field: 'adminName',
      type: 'input',
      label: '管理员账号',
      rules: [],
      placeholder: '请输入管理员账号'
    },
    {
      field: 'Sex',
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
      field: 'Email',
      type: 'input',
      label: '邮箱',
      rules: [],
      placeholder: '请输入邮箱'
    },
    {
      field: 'Address',
      type: 'input',
      label: '地址',
      rules: [],
      placeholder: '请输入地址'
    },
    {
      field: 'adminPwd',
      type: 'input',
      label: '密码',
      rules: [],
      placeholder: '请输入密码'
    },
    {
      field: 'Tel',
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
