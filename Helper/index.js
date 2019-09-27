module.exports = {
  applyCompleteModule: function(modul) {
    try {
      var mod = require("../" + modul);
      var rArray = [];
      for (const fun in mod)
        rArray.push({ funcName: modul + ":" + fun, result: mod[fun]() });

      return rArray;
    } catch (ex) {
      return ex;
    }
  }
};
