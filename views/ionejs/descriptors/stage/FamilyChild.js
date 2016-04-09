var ionejs = require('ionejs');
var inherits = ionejs.inherits;
var DualWriter = require('../../others/writers/DualWriter');
var defaults = require('underscore').defaults;

var FamilyChild = function(options) {
	var name = options.config.options.name;
	defaults(options, {
		baseline: 'middle',
		align: 'center',
		height: 20,
		in: {
			font: "Bold 24px Arial"
		},
		out: {
			font: "Bold 20px Arial"
		}
	});
	DualWriter.apply(this, arguments);
}

var p = inherits(FamilyChild, DualWriter);

p.init = function() {
	DualWriter.prototype.init.apply(this);
	var I = this;
	I.sync();

	I.addEventListener('mousein', function() {
		I.dispatchEvent(new ionejs.Event({
			type: 'Select',
			config: I._state.config
		}));
	});
	I.addEventListener('mouseout', function() {
		I.dispatchEvent(new ionejs.Event({
			type: 'Unselect'
		}));
	});
	I.addEventListener('click', function() {
		I.dispatchEvent(new ionejs.Event({
			type: 'OpenEditor',
			config: I._state.config
		}));
	});
}

p.sync = function() {
	var _S = this._state;
	var name = _S.config.options.name;
	_S.name = name + '_tag';
	_S.text = name ? '-'+name : '-anonymity';
	_S.prefix = _S.config.alias.split(".").pop();
}

p.update = function() {
	DualWriter.prototype.update.apply(this);
	this.sync();
}

module.exports = FamilyChild;
