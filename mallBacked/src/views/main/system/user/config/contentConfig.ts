export const contentTableConfig = {
  title: "用户列表",
  addTitle: "新建用户",
  showIndexColumn: true,
  propList: [
    { prop: "nickName", label: "用户名", minWidth: "100px" },
    { prop: "gender", label: "性别", minWidth: "40px", slotName: "gender" },
    { prop: "phone", label: "手机号", minWidth: "100px" },
    { prop: "status", label: "状态", minWidth: "60px", slotName: "status" },
    {
      prop: "createdAt",
      label: "入驻时间",
      minWidth: "180px"
    },
    {
      prop: "updatedAt",
      label: "变更时间",
      minWidth: "180px"
    },
    {
      label: "操作",
      minWidth: "120px",
      slotName: "operate"
    }
  ]
};
