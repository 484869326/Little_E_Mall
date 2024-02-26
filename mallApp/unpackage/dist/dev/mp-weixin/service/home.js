"use strict";
const service_index = require("./index.js");
const getHomeMutidata = () => {
  return service_index.Request1.get("/home/multidata");
};
const getGoodList = (page) => {
  return service_index.Request1.get("/home/getGoodList/" + page);
};
const getMyMutidata = () => {
  return service_index.Request1.get("/home/mySwiper");
};
exports.getGoodList = getGoodList;
exports.getHomeMutidata = getHomeMutidata;
exports.getMyMutidata = getMyMutidata;
