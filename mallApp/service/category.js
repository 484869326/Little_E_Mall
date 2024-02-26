import Request1 from "./index.js";

const getCategoryList = () => {
  return Request1.get("/categoryList");
};
export { getCategoryList };
