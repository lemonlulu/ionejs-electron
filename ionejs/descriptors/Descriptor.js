var inherits = require("ionejs").inherits;
var One = require("ionejs").One;

var Descriptor = function(options) {
	One.apply(this, arguments);
	var me = this;
	me.addEventListener('mousedown', this.opening.bind(this));
	me.addEventListener('mouseup', this.closing.bind(this));
	me.state = "closed";
	me.rate = 1/60;
	me.process = 0;
}

var p = inherits(Descriptor, One);

p.opening = function() {
	this.state = "opening";
};

p.closing = function() {
	this.state = "closing";
};

p.update = function() {
	var me = this;
	if (me.state == "opening") {
		me.process += me.rate;
	} 
	if (me.state == "closing") {
		me.process -= me.rate;
	}
	if(me.process >= 1) {
		me.process = 1;
		me.state = "opened";
	}
	if(me.process <= 0) {
		me.process = 0;
		me.state = "closed";
	}
};

module.exports = Descriptor;
