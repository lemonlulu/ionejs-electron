var inherits = require("ionejs").inherits;
var One = require("ionejs").One;

var Descriptor = function(options) {
	One.apply(this, arguments);
};

var p = inherits(Descriptor, One);

p.getOptions = function() {
	return this.state.options;
};

p.getSource = function() {
	return this.getParent();
};

module.exports = Descriptor;
