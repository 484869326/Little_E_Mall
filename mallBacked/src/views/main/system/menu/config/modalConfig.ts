import type { IForm } from "@/types/baseUI";
import { isValidSvg, validateSelect } from "@/utils/dataFormat";

export const modalConfig: IForm = {
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
      field: "level",
      type: "select",
      label: "层级",
      rules: [{ required: true, message: "请选择层级", trigger: "change" }],
      placeholder: "请选择层级",
      options: [
        {
          label: "一级菜单",
          value: 1
        },
        {
          label: "二级菜单",
          value: 2
        },
        {
          label: "三级菜单",
          value: 3
        }
      ],
      isChange: () => {}
    },
    {
      field: "icon",
      type: "input",
      label: "字体图标",
      rules: [
        { required: true, message: "字体图标不能为空", trigger: "blur" },
        { validator: isValidSvg, trigger: "blur" }
      ],
      placeholder: "请输入字体图标",
      isHidden: true
    },
    {
      field: "path",
      type: "input",
      label: "路径",
      rules: [],
      placeholder: "请输入路径",
      isHidden: true
    },
    {
      field: "parentId",
      type: "select",
      label: "上级菜单",
      rules: [
        { required: true, message: "请选择上级菜单", trigger: "blur" },
        { validator: validateSelect, trigger: "change" }
      ],
      options: [],
      isHidden: true
    },
    {
      field: "permission",
      type: "input",
      label: "权限",
      rules: [{ required: true, message: "请输入权限", trigger: "blur" }],
      options: [],
      isHidden: true
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
