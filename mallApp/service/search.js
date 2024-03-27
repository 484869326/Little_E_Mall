import Request1 from "./index.js";

const getSearchList = (goodName, page, limit = 10) => {
  return Request1.get("/search", { goodName, page, limit });
};

export { getSearchList };
