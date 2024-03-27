import type { IForm } from "@/types/baseUI";
import { validateSelect } from "@/utils/dataFormat";

export const modelConfig: IForm = {
  formItems: [
    {
      field: "goodName",
      type: "input",
      label: "商品名",
      rules: [
        { required: true, message: "请输入商品名", trigger: "blur" },
        {
          pattern: /^[\u4e00-\u9fa5a-zA-Z0-9]{1,15}$/,
          message: "商品名最长为15个字符",
          trigger: "blur"
        }
      ],
      placeholder: "请输入商品名"
    },
    {
      field: "cid",
      type: "select",
      label: "类别",
      rules: [
        { required: true, message: "请选择类别", trigger: "change" },
        { validator: validateSelect, trigger: "change" }
      ],
      placeholder: "请选择类别",
      options: []
    },
    {
      field: "explain",
      type: "input",
      label: "描述",
      rules: [
        { required: true, message: "请输入描述", trigger: "blur" },
        {
          pattern: /[^,]+/g,
          message: "描述格式为 (xx,xx)",
          trigger: "blur"
        }
      ],
      placeholder: "请输入描述"
    },
    {
      field: "advertise",
      type: "input",
      label: "广告词",
      rules: [{ required: true, message: "请输入描述", trigger: "blur" }],
      placeholder: "请输入广告词"
    },
    {
      field: "price",
      type: "input",
      label: "价格",
      rules: [
        { required: true, message: "请输入价格", trigger: "blur" },
        {
          pattern: /^\d+(?:,\s*\d+)*$/,
          message: "价格格式为数字(xx,xx)",
          trigger: "blur"
        }
      ],
      placeholder: "请输入价格"
    },
    {
      field: "color",
      type: "input",
      label: "颜色",
      rules: [
        { required: true, message: "请输入颜色", trigger: "blur" },
        {
          pattern: /^[\u4e00-\u9fa5]{1,10}(?:,\s*[\u4e00-\u9fa5]{1,10})*$/,
          message: "颜色格式为(xx,xx)",
          trigger: "blur"
        }
      ],
      placeholder: "请输入颜色"
    },
    {
      field: "type",
      type: "input",
      label: "类型",
      rules: [
        { required: true, message: "请输入类型", trigger: "blur" },
        {
          pattern: /^\d+\+\d+(,\d+\+\d+)*$/,
          message: "类型格式为 (x+x,x+x)",
          trigger: "blur"
        }
      ],
      placeholder: "请输入类型"
    },
    {
      field: "goodImg",
      type: "upload",
      label: "商品图",
      rules: [{ required: true, message: "请选择商品图", trigger: "blur" }],
      listType: "text"
    },
    {
      field: "swiper",
      type: "upload",
      label: "轮播图",
      rules: [{ required: true, message: "请选择轮播图", trigger: "blur" }],
      listType: "picture-card"
    },
    {
      field: "detail",
      type: "upload",
      label: "详细图",
      rules: [{ required: true, message: "请选择详细图", trigger: "blur" }],
      listType: "picture-card"
    }
  ],
  labelWidth: "100px",
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
