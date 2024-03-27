"use strict";
const service_index = require("./index.js");
const getCheckAll = (userId = 1) => {
  return service_index.Request1.post("/getAllCheck", { userId });
};
const getShoppingList = (page) => {
  return service_index.Request1.post("/getShop/" + page, { signature: "1" });
};
const changeShoppingNum = (id, num) => {
  return service_index.Request1.post("/changeNum", { id, num });
};
const deleteShopping = (id) => {
  return service_index.Request1.delete(id);
};
const changeChecked = (id, checked, userId = 1) => {
  return service_index.Request1.post("/changeChecked", { id, checked, userId });
};
const changeCheckedAll = (checkAll) => {
  return service_index.Request1.post("/checkedAll", { id: "1", checkAll });
};
exports.changeChecked = changeChecked;
exports.changeCheckedAll = changeCheckedAll;
exports.changeShoppingNum = changeShoppingNum;
exports.deleteShopping = deleteShopping;
exports.getCheckAll = getCheckAll;
exports.getShoppingList = getShoppingList;
