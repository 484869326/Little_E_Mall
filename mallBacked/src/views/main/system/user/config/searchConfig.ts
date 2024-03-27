import type { IForm } from "@/types/baseUI";

export const SearchFormConfig: IForm = {
  formItems: [
    {
      field: "nickName",
      value: "",
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
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
          value: "0"
        },
        {
          label: "女",
          value: "1"
        }
      ]
    },
    {
      field: "phone",
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
  ],
  labelWidth: "120px"
};
