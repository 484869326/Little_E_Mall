"use strict";
const service_index = require("./index.js");
const getGoodDetail = (Goodid) => {
  return service_index.Request1.get("/goodDetail", { Goodid });
};
exports.getGoodDetail = getGoodDetail;
