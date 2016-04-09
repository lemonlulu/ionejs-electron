var ionejs = require('ionejs');
var _ = require('underscore');
var inherits = ionejs.inherits;
var DualWriter = require('./DualWriter');

var Button = function(options) {
    DualWriter.apply(this, arguments);
}

var p = inherits(Button, DualWriter);

p.init = function() {
    var I = this;
    DualWriter.prototype.init.apply(I);
    I.addEventListener('drop', function(e) {
    	console.log(e.dropSource);
    });
	I.addEventListener('click', function(e) {
    	I.dispatchEvent(new ionejs.Event({
        	type: I._state.text
        }));
        e.stopPropagation();
    });
}

module.exports = Button;
