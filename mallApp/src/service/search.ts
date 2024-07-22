import Request1 from "./index";

const getSearchList = (searchValue: any, page: any, limit = 10) => {
  return Request1.get("/search", { searchValue, page, limit });
};

export { getSearchList };
