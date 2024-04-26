import type { IForm } from "@/types/baseUI";
import { isValidSvg, validateSelect } from "@/utils/dataFormat";

export const modelConfig: IForm = {
  formItems: [
    {
      field: "text",
      type: "input",
      label: "菜单名",
      rules: [
        { required: true, message: "请输入菜单名", trigger: "blur" },
        {
          pattern: /^.{0,10}$/,
          message: "菜单名最长为10个字符",
          trigger: "blur"
        }
      ],
      placeholder: "请输入菜单名"
    },
    {
      field: "icon",
      type: "input",
      label: "字体图标",
      rules: [
        { required: true, message: "字体图标不能为空", trigger: "blur" },
        { validator: isValidSvg, trigger: "blur" }
      ],
      placeholder: "请输入字体图标"
    },
    {
      field: "level",
      type: "select",
      label: "层级",
      rules: [{ required: true, message: "请选择层级", trigger: "change" }],
      placeholder: "请选择层级",
      options: [
        {
          label: "一级菜单",
          value: 0
        },
        {
          label: "二级菜单",
          value: 1
        }
      ],
      isChange: (formItems: any, value: any) => {
        const pathRules = [
          { required: true, message: "请输入路径", trigger: "blur" },
          {
            pattern: /\/+/,
            message: "请填写正确的路径",
            trigger: "blur"
          }
        ];
        formItems.forEach((item: any) => {
          if (item.field === "parentId") {
            item.isHidden = !value;
          } else if (item.field === "icon") {
            item.isHidden = value;
          } else if (item.field === "path") {
            item.rules = value ? pathRules : [];
          }
        });
      }
    },
    {
      field: "path",
      type: "input",
      label: "路径",
      rules: [],
      placeholder: "请输入路径"
    },
    {
      field: "parentId",
      type: "select",
      label: "上级菜单",
      rules: [
        { required: true, message: "请选择上级菜单", trigger: "blur" },
        { validator: validateSelect, trigger: "change" }
      ],
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
