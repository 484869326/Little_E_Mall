import Request1 from "./index.js";

const getSearchList = (searchValue, page, limit = 10) => {
  return Request1.get("/search", { searchValue, page, limit });
};

export { getSearchList };
