var inherits = require("ionejs").inherits;
var Event = require('ionejs').Event;
var Descriptor = require("../Descriptor");
var _ = require("underscore");

var Hold = function(options) {
	_.defaults(options, {
		state: "closed",
		rate: 1/40,
		process: 0
	});
	Descriptor.apply(this, arguments);
}

var p = inherits(Hold, Descriptor);

p.afterMount = function() {
	var I = this;
	I.getSource().mode('moveable');
	I.getSource().addEventListener('mousedown', function(event) {
		I.opening()
	});
	I.getSource().addEventListener('mouseup', function(event) {
		I.closing();
	});
	I.getSource().addEventListener('mousemove', function(event) {
		I.closing();
	});
};

p.opening = function() {
	this.state.state = "opening";
};

p.closing = function() {
	this.state.state = "closing";
};

p.update = function() {
	var I = this;
	var S = this.state;
	if (S.state == "opening") {
		S.process += S.rate;
	} 
	if (S.state == "closing") {
		S.process -= S.rate;
	}
	if(S.process >= 1) {
		Actions.emit("ionejs.Writer.Edit", this.getOptions());
		S.state = "closed";
		S.process = 0;
	}
	if(S.process <= 0) {
		S.state = "closed";
		S.process = 0;
	}
};

p.draw = function(context) {
	var I = this.getSource();
	var S = I.state;
	var width = S.width;
	var height = S.height;
	var l = (width+height)*this.state.process*2;
	context.lineWidth = 3;
	context.beginPath();
	context.moveTo(0, 0);
	if (l > width + height +width) {
		context.lineTo(width, 0);
		context.lineTo(width, height);
		context.lineTo(0, height);
		context.lineTo(0, (width+height)*2 - l);
		if (l == (width+height)*2)
			context.closePath();
	}
	else if (l > width + height) {
		context.lineTo(width, 0);
		context.lineTo(width, height);
		context.lineTo(height+width*2 - l, height)
	}
	else if (l > width) {
		context.lineTo(width, 0);
		context.lineTo(width, l - width);
	} else {
		context.lineTo(l, 0);
	}
		context.stroke();
};

module.exports = Hold;
