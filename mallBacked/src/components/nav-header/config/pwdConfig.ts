import type { IForm } from "@/types/baseUI";

export const pwdConfig: IForm = {
  formItems: [
    {
      field: "password",
      type: "input",
      label: "旧密码",
      rules: [
        {
          required: true,
          message: "旧密码不能为空",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "旧密码为5-10个数字或者英文",
          trigger: "blur"
        }
      ],
      placeholder: "请输入旧密码"
    },
    {
      field: "newPassword",
      type: "input",
      label: "新密码",
      rules: [
        {
          required: true,
          message: "新密码不能为空",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "新密码为5-10个数字或者英文",
          trigger: "blur"
        }
      ],
      placeholder: "请输入新密码"
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
