import Request1 from "./index.js";

const getHomeMutidata = () => {
  return Request1.get("/home/multidata");
};
const getGoodList = (page) => {
  return Request1.get("/home/getGoodList/" + page + "");
};
const getMyMutidata = () => {
  return Request1.get("/home/mySwiper");
};
export { getHomeMutidata, getGoodList, getMyMutidata };
