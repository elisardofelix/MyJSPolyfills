'use strict';

module.exports = {
	stringInclude: () => {
		if (!String.prototype.includes) {
			String.prototype.includes = function (str, start, caseSensitive) {
				if (typeof start !== 'number') {
					start = 0;
				}
				if (typeof caseSensitive !== 'boolean') {
					caseSensitive = false;
				}

				if (start + search.length > this.length)
					return false;

				if (caseSensitive)
					return this.toLowerCase().indexOf(str.toLowerCase(), start) !== -1;
				else
					return this.indexOf(str, start) !== -1;
			}

		}
	}
}