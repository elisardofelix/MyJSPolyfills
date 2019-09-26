module.exports = {
    applyCompleteModule: modul => {
        let mod = require("../" + modul);
        for (const fun in mod) {
            mod[fun]();
        }
    }
}