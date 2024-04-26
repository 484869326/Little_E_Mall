import type { IForm } from "@/types/baseUI";

export const SearchFormConfig: IForm = {
  formItems: [
    {
      field: "goodName",
      type: "input",
      label: "商品名",
      rules: [],
      placeholder: "请输入商品名"
    },
    {
      field: "cid",
      type: "select",
      label: "类别",
      rules: [],
      placeholder: "请选择类别",
      options: []
    },
    {
      field: "price",
      type: "input",
      label: "价格",
      rules: [],
      placeholder: "请输入价格"
    },
    {
      field: "color",
      type: "input",
      label: "颜色",
      rules: [],
      placeholder: "请输入颜色"
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
