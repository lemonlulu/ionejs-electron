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
			config: I.state.config
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
			config: I.state.config
		}));
	});
}

p.sync = function() {
	var S = this.state;
	var name = S.config.options.name;
	S.name = name + '_tag';
	S.text = name ? '-'+name : '-anonymity';
	S.prefix = S.config.alias.split(".").pop();
}

p.update = function() {
	DualWriter.prototype.update.apply(this);
	this.sync();
}

module.exports = FamilyChild;
