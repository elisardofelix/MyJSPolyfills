"use strict";

const helper = require("./Helper");

module.exports = {
  loadCompleteModule: helper.applyCompleteModule,
  String: require("./String"),
  Array: require("./Array")
};
