import Request1 from "./index.js";

const getSearchList = (Goodname, page, limit = 10) => {
  return Request1.get("/search", { Goodname, page, limit });
};

export { getSearchList };
