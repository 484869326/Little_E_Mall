"use strict";
const service_index = require("./index.js");
const getSearchList = (Goodname, page, limit = 10) => {
  return service_index.Request1.get("/search", { Goodname, page, limit });
};
exports.getSearchList = getSearchList;
