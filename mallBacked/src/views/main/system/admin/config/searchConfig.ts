import type { IForm } from "@/types/baseUI";

export const SearchFormConfig: IForm = {
  formItems: [
    {
      field: "adminName",
      type: "input",
      label: "管理员账号",
      rules: [],
      placeholder: "请输入管理员账号"
    },
    {
      field: "gender",
      type: "select",
      label: "性别",
      rules: [],
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
      rules: [],
      placeholder: "请输入邮箱"
    },
    {
      field: "address",
      type: "input",
      label: "地址",
      rules: [],
      placeholder: "请输入地址"
    },
    {
      field: "tel",
      type: "input",
      label: "手机号",
      rules: [],
      placeholder: "请输入手机号"
    },
    {
      field: "betweenTime",
      type: "datepicker",
      label: "时间",
      rules: [],
      dataOptions: {
        type: "daterange",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间"
      }
    }
  ]
};
