import Request1 from "./index";

const getGoodDetail = (goodId: string) => {
  return Request1.get<IRequest.IGood>("/goodDetail", { goodId });
};
const addShop = (data: IRequest.IAddShop) => {
  return Request1.post("/addShop", data);
};
const buy = (data: IRequest.IBuy) => {
  return Request1.post("/buy", data);
};
//确认订单页面加载
const getBuyGoodList = (data: any) => {
  return Request1.post("/getBuyGoodList", data);
};
//获取订单管理数据
const getOrderList = (data: IRequest.IOrderManage) => {
  return Request1.post<IRequest.IOrder[]>("/getOrderList", data);
};
//确认收货
const received = (data: IRequest.IReceive) => {
  return Request1.post("/received", data);
};
export { getGoodDetail, addShop, buy, getBuyGoodList, getOrderList, received };
