var inherits = require('ionejs').inherits;
var blur = require('ionejs').blur;
var Descriptor = require('../Descriptor');
var _ = require('underscore');

var Family = function(options) {
	_.extend(options, {
		alpha: 0,
		beta: 0,
		rate: 1/40,
		path: 'stage'
	});
	Descriptor.apply(this, arguments);
}

var p = inherits(Family, Descriptor);

p.init = function() {
	this.getSource().addEventListener('hold', this.open.bind(this));
};

p.open = function() {
	this._state.beta = 1;
};

p.close = function() {
	this._state.beta = 0;
};

p.update = function() {
	blur(this._state, 'alpha', this._state.beta, 1/6);
};

p.draw = function(ctx) {
	try {
        	ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, this.getSource()._state.width, this.getSource()._state.height);

		ctx.font="30px Georgia";
		ctx.fillStyle = "#000000";
		ctx.fillText('path: '+'stage', 160, 100);
	} catch (e) {}
};

module.exports = Family;
