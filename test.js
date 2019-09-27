const lib = require("./index");
const assert = require("assert");

const assertFunc = element => {
  assert.equal(
    element.result,
    true,
    "No expected Result in Function : " + element.funcName
  );
};

lib.loadCompleteModule("String").forEach(assertFunc);
lib.loadCompleteModule("Array").forEach(assertFunc);
