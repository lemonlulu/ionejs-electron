var ionejs = require('ionejs');
var _ = require('underscore');
var inherits = ionejs.inherits;
var Writer =  ionejs.Writer;

var HitableWriter = function(options) {
	_.defaults(options, {
		shouldMeasure: true,
		hitable: true,
		width: 0,
		height: 0
	});
	Writer.apply(this, arguments);
}

var p = inherits(HitableWriter, Writer);

p.testHit = function(point) {
	var b1 = false,
	    b2 = false;
	var S = this.state;
	if (S.align == 'start')
		b1 = point.x > 0 && point.x < S.width;
	if (S.align == 'center')
		b1 = point.x > -S.width/2 && point.x < S.width/2;
	if (S.align == 'end')
		b1 = point.x > -S.width && point.x < 0;

	if (S.baseline == 'top')
		b2 = point.y > 0 && point.y < S.height;
	if (S.baseline == 'middle')
		b2 = point.y > -S.height/2 && point.y < S.height/2;
	if (S.baseline == 'bottom')
		b2 = point.y > -S.height && point.y < 0;
    	return b1 && b2;
};

p.draw = function(ctx) {
	Writer.prototype.draw.apply(this, arguments);
	var S = this.state;
	if(S.shouldMeasure) {
		S.height = Number(ctx.font.match(/([0-9]+)px/)[1]);
		S.width = ctx.measureText(S.prefix+S.text).width;
		S.shouldMeasure = false;
	}
}

module.exports = HitableWriter;
