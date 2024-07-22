import Request1 from "./index";

const getMyMutidata = () => {
  return Request1.get("/mySwiper");
};
const getCode = (phone: string) => {
  return Request1.get("/code", { phone });
};
const verifyCode = (data: any) => {
  return Request1.post("/verifyCode", data);
};
const register = (data: any) => {
  return Request1.post("/register", data);
};
const login = (data: any) => {
  return Request1.post("/login", data);
};
const getUserInfo = (data: any) => {
  return Request1.post("/getUserInfo", data);
};
const updateUserInfo = (id: string, data: any) => {
  return Request1.patch(`/user/${id}`, data);
};
export {
  getMyMutidata,
  getCode,
  verifyCode,
  register,
  login,
  getUserInfo,
  updateUserInfo,
};
