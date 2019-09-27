"use strict";

module.exports = {
  loadCompleteModule: function(modul) {
    try {
      var mod = require("./" + modul);
      var rArray = [];
      for (var fun in mod)
        rArray.push({ funcName: modul + ":" + fun, result: mod[fun]() });

      return rArray;
    } catch (ex) {
      return ex;
    }
  },
  String: require("./String"),
  Array: require("./Array")
};
