var ionejs = require('ionejs');
var inherits = ionejs.inherits;
var DualWriter = require('../../others/writers/DualWriter');

var Family_Child = function(options) {
	DualWriter.apply(this, arguments);
}

var p = inherits(Family_Child, DualWriter);

p.init = function() {
	DualWriter.prototype.init.apply(this);
	var I = this;
	I.addEventListener('mousein', function() {
		I.dispatchEvent(new ionejs.Event({
			type: 'Select',
			alias: I._state.prefix,
			options: I._state.options
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
			alias: I._state.prefix,
			options: I._state.options
		}));
	});
}

module.exports = Family_Child;
