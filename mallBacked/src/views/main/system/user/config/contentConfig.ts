export const contentTableConfig = {
  title: "用户列表",
  addTitle: "新建用户",
  propList: [
    { prop: "nickName", label: "用户名", minWidth: "60px" },
    { prop: "gender", label: "性别", minWidth: "40px", slotName: "gender" },
    { prop: "phone", label: "手机号", minWidth: "100px" },
    { prop: "status", label: "状态", minWidth: "60px", slotName: "status" },
    {
      prop: "createdAt",
      label: "创建时间",
      minWidth: "100px"
    },
    {
      prop: "updatedAt",
      label: "更新时间",
      minWidth: "100px"
    },
    {
      label: "操作",
      minWidth: "80px",
      slotName: "operate"
    }
  ]
};
