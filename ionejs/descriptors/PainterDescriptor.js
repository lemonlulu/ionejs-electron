var inherits = require("ionejs").inherits;
var Descriptor = require("./Descriptor");

var PainterDescriptor = function(options) {
	Descriptor.apply(this, arguments);
	var me = this;
	me.state = "closed";
	me.rate = 1/30;
	me.process = 0;
	window.adf = this;
}

var p = inherits(PainterDescriptor, Descriptor);

p.init = function() {
	this.getSource().addEventListener('mousedown', this.opening.bind(this));
	this.getSource().addEventListener('mouseup', this.closing.bind(this));
	this.getSource().addEventListener('mousemove', this.closing.bind(this));
};

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

p.draw = function(context) {
	var image = this.getSource()._image;
	if (!image) return;
	else {
		var width = image.width;
		var height = image.height;
		var l = (width+height)*this.process*2;
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
	}
};

module.exports = PainterDescriptor;
