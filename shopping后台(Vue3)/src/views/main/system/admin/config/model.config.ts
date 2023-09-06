import { IForm } from '@/base-ui/form';

export const modelConfig: IForm = {
  formItems: [
    {
      field: 'adminName',
      type: 'input',
      label: '管理员账号',
      rules: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '账号为5-10个数字或者英文',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入管理员账号'
    },
    {
      field: 'Sex',
      type: 'select',
      label: '性别',
      rules: [{ required: true, message: '请选择性别', trigger: 'change' }],
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
      rules: [
        {
          required: true,
          message: '邮箱不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^\S+@\S+\.\S+$/i,
          message: '请输入正确的邮箱',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入邮箱'
    },
    {
      field: 'Address',
      type: 'input',
      label: '地址',
      rules: [{ required: true, message: '地址不能为空', trigger: 'blur' }],
      placeholder: '请输入地址'
    },
    {
      field: 'adminPwd',
      type: 'input',
      label: '密码',
      rules: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '密码为5-10个数字或者英文',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入密码'
    },
    {
      field: 'Tel',
      type: 'input',
      label: '手机号',
      rules: [
        {
          required: true,
          message: '手机号不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^1[0-9]{10}$/,
          message: '请输入正确的手机号',
          trigger: 'blur'
        }
      ],
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
