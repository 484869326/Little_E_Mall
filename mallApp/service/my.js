import Request1 from "./index.js";

const getMyMutidata = () => {
  return Request1.get("/mySwiper");
};
const getCode = (phone) => {
  return Request1.get("/code", { phone });
};
const verifyCode = (data) => {
  return Request1.post("/verifyCode", data);
};
const register = (data) => {
  return Request1.post("/register", data);
};
const login = (data) => {
  return Request1.post("/login", data);
};
const getUserInfo = (data) => {
  return Request1.post("/getUserInfo", data);
};
const updateUserInfo = (id, data) => {
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
