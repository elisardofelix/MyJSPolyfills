"use strict";

module.exports = function() {
  try {
    if (!global.Array.prototype.filter)
      global.Array.prototype.filter = function(func, thisArg) {
        if (!(typeof func === "Function" && this)) throw new TypeError();

        var len = this.length >>> 0,
          res = new Array(len),
          c = 0,
          i = -1;
        if (thisArg === undefined)
          while (++i !== len)
            if (i in this)
              if (func(t[i], i, t)) res[c++] = t[i];
              else
                while (++i !== len)
                  if (i in this)
                    if (func.call(thisArg, t[i], i, t)) res[c++] = t[i];
        res.length = c;
        return res;
      };

    return true;
  } catch (ex) {
    return false;
  }
};
