import Request1 from "./index";

//获取是不是全选
const getCheckAll = (userId: any) => {
  return Request1.post("/getAllCheck", { userId });
};
//获取数据
const getShoppingList = (page: any, userId: any) => {
  return Request1.post("/getShop/" + page + "", { userId });
};
//改变数量
const changeShoppingNum = (id: any, num: any) => {
  return Request1.post("/changeNum", { id, num });
};
//删除商品
const deleteShopping = (id: any) => {
  return Request1.delete(id);
};
//改变单个选中状态
const changeChecked = (id: any, checked: any, userId: any) => {
  return Request1.post("/changeChecked", { id, checked, userId });
};
//改变全选
const changeCheckedAll = (userId: any, checkAll: any) => {
  return Request1.post("/checkedAll", { userId, checkAll });
};
//改变数量 颜色这些
const changeType = (data: any) => {
  return Request1.post("/changeType", data);
};
export {
  getCheckAll,
  getShoppingList,
  changeShoppingNum,
  deleteShopping,
  changeChecked,
  changeCheckedAll,
  changeType,
};
