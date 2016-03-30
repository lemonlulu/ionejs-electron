var inherits = require("ionejs").inherits;
var One = require("ionejs").One;

var Descriptor = function(options) {
	One.apply(this, arguments);
	this._options = options;
};

var p = inherits(Descriptor, One);

p.getOptions = function() {
	return this._options;
};

p.getSource = function() {
	return this.getParent();
};

module.exports = Descriptor;
