"use strict";
const service_index = require("./index.js");
const getCategoryList = () => {
  return service_index.Request1.get("/categoryList");
};
exports.getCategoryList = getCategoryList;
