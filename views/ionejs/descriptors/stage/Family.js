var inherits = require('ionejs').inherits;
var Descriptor = require('../Descriptor');
var _ = require('underscore');

var Family = function(options) {
	_.extend(options, {
		alpha: 1,
		beta: 0,
		rate: 1/40
	});
	Descriptor.apply(this, arguments);
}

var p = inherits(Family, Descriptor);

p.opening = function() {
	this._state.state = "opening";
};

p.draw = function(ctx) {
	ctx.font="20px Georgia";
	ctx.fillText("Hello Family!",10,50);
};

module.exports = Family;
