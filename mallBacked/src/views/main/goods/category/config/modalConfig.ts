import type { IForm } from "@/types/baseUI";
import { getPageListData } from "@/service/main";
import { validateSelect } from "@/utils/dataFormat";
import { reactive } from "vue";

export const modalConfig: IForm = reactive({
  formItems: [
    {
      field: "cName",
      type: "input",
      label: "类别名",
      rules: [
        { required: true, message: "请输入类别名", trigger: "blur" },
        {
          pattern: /^.{0,10}$/,
          message: "类别名最长为10个字符",
          trigger: "blur"
        }
      ],
      placeholder: "请输入类别名"
    },
    {
      field: "level",
      type: "select",
      label: "层级",
      rules: [{ required: true, message: "请选择层级", trigger: "change" }],
      placeholder: "请选择层级",
      options: [
        {
          label: "第一分类",
          value: 0
        },
        {
          label: "第二分类",
          value: 1
        },
        {
          label: "第三分类",
          value: 2
        }
      ],
      remote: true,
      isChange: async (formItems: any, value: any) => {
        //隐藏列表
        const categoryParentItem = formItems.find((item: any) => {
          return item.field === "parentId";
        });
        const categoryImgItem = formItems.find((item: any) => {
          return item.field === "cImg";
        });
        if (value === 0) {
          categoryParentItem.isHidden = true;
          categoryImgItem.isHidden = false;
        } else if (value === 1) {
          categoryImgItem.isHidden = true;
          categoryParentItem.isHidden = false;
        } else {
          categoryImgItem.isHidden = false;
          categoryParentItem.isHidden = false;
        }
        const { data } = await getPageListData(`/good/selectCategory/${value - 1}`, {});
        categoryParentItem.options = data.map((item: any) => {
          return { label: item.cName, value: item.cid };
        });
      }
    },
    {
      field: "parentId",
      type: "select",
      label: "上层类别",
      rules: [
        { required: true, message: "请选择上层类别", trigger: "change" },
        { validator: validateSelect, trigger: "change" }
      ],
      placeholder: "请输入上层类别",
      options: []
    },
    {
      field: "cImg",
      type: "upload",
      label: "图片",
      rules: [{ required: true, message: "请选择上传图片", trigger: "change" }],
      listType: "text"
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
});
