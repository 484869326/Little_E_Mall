import Request1 from "./index.js";

//获取是不是全选
const getCheckAll = (userid) => {
  return Request1.post("/getAllCheck", { userid });
};
//获取数据
const getShoppingList = (page, userid) => {
  return Request1.post("/getShop/" + page + "", { userid });
};
//改变数量
const changeShoppingNum = (id, num) => {
  return Request1.post("/changeNum", { id, num });
};
//删除商品
const deleteShopping = (id) => {
  return Request1.delete(id);
};
//改变单个选中状态
const changeChecked = (id, checked, userid) => {
  return Request1.post("/changeChecked", { id, checked, userid });
};
//改变全选
const changeCheckedAll = (userid, checkAll) => {
  return Request1.post("/checkedAll", { userid, checkAll });
};
//改变数量 颜色这些
const changeType = (data) => {
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
