import type { IForm } from "@/types/baseUI";

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色",
      rules: [{ required: true, message: "请输入角色", trigger: "blur" }],
      placeholder: "请输入角色"
    },
    {
      field: "intro",
      type: "input",
      label: "描述",
      rules: [],
      placeholder: "请输入描述"
    },
    {
      field: "roleMenu",
      type: "input",
      label: "功能权限",
      rules: [],
      slotName: "roleMenu"
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: "5px"
  }
};
