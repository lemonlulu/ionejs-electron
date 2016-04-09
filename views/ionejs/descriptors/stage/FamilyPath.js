var ionejs = require('ionejs');
var inherits = ionejs.inherits;
var defaults = require('underscore').defaults;
var DualWriter = require('../../others/writers/DualWriter');

var FamilyPath = function(options) {
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
	}
	)
	DualWriter.apply(this, arguments);
}

var p = inherits(FamilyPath, DualWriter); 

p.init = function() {
	DualWriter.prototype.init.apply(this);
	var I = this;

	I.addEventListener('drop', function(e) {
		var config = e.dropSource._state.config;
		var sourceName = config.options.name;
		if (sourceName) {
			I._state.text = I._state.text + '.' + sourceName;
			I.dispatchEvent(new ionejs.Event({
				type: "PathChange",
				Config: config
				
			}))
		}
		
	});
}	

module.exports = FamilyPath;
