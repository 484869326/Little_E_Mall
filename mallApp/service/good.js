import Request1 from "./index.js";

const getGoodDetail = (goodId) => {
  return Request1.get("/goodDetail", { goodId });
};
const addShop = (data) => {
  return Request1.post("/addShop", data);
};
const buy = (data) => {
  return Request1.post("/buy", data);
};
//确认订单页面加载
const getBuyGoodList = (data) => {
  return Request1.post("/getBuyGoodList", data);
};
//获取订单管理数据
const getOrderList = (data) => {
  return Request1.post("/getOrderList", data);
};
//确认收货
const received = (data) => {
  return Request1.post("/received", data);
};
export { getGoodDetail, addShop, buy, getBuyGoodList, getOrderList, received };
