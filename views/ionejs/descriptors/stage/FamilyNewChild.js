var ionejs = require('ionejs');
var _ = require('underscore');
var inherits = ionejs.inherits;
var SpinWriter = require('../../others/writers/SpinWriter');

var FamilyNewChild = function(options) {
	SpinWriter.apply(this, arguments);
}

var p = inherits(FamilyNewChild, SpinWriter);

p.init = function() {
	SpinWriter.prototype.init.apply(this);
	var I = this;
	I.addEventListener('click', function() {
		var alias = I.query('front')._state.text;
		I.dispatchEvent(new ionejs.Event({
			type: 'NewOne',
			alias: alias
		}));
	});
}

module.exports = FamilyNewChild;
