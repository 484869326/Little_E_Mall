import type { IForm } from "@/types/baseUI";

export const userConfig: IForm = {
  formItems: [
    {
      field: "gender",
      type: "select",
      label: "性别",
      rules: [{ required: true, message: "请选择性别", trigger: "change" }],
      placeholder: "请选择性别",
      options: [
        {
          label: "男",
          value: 0
        },
        {
          label: "女",
          value: 1
        }
      ]
    },
    {
      field: "email",
      type: "input",
      label: "邮箱",
      rules: [
        {
          required: true,
          message: "邮箱不能为空",
          trigger: "blur"
        },
        {
          pattern: /^\S+@\S+\.\S+$/i,
          message: "请输入正确的邮箱",
          trigger: "blur"
        }
      ],
      placeholder: "请输入邮箱"
    },
    {
      field: "address",
      type: "input",
      label: "地址",
      rules: [{ required: true, message: "地址不能为空", trigger: "blur" }],
      placeholder: "请输入地址"
    },
    {
      field: "tel",
      type: "input",
      label: "手机号",
      rules: [
        {
          required: true,
          message: "手机号不能为空",
          trigger: "blur"
        },
        {
          pattern: /^1[0-9]{10}$/,
          message: "请输入正确的手机号",
          trigger: "blur"
        }
      ],
      placeholder: "请输入手机号"
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
