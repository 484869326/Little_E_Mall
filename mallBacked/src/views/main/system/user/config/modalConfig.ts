import type { IForm } from "@/types/baseUI";

export const modalConfig: IForm = {
  formItems: [
    {
      field: "nickName",
      type: "input",
      label: "用户名",
      rules: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        {
          pattern: /^[\u4e00-\u9fa5A-Za-z0-9]{4,10}$/,
          message: "用户名为4-10个字符",
          trigger: "blur"
        }
      ],
      placeholder: "请输入用户名"
    },
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
      field: "avatarUrl",
      type: "upload",
      label: "头像",
      listType: "text"
    },
    {
      field: "phone",
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
    },
    {
      field: "status",
      type: "switch",
      label: "状态",
      rules: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
