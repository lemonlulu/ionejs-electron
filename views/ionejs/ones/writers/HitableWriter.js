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
	var _S = this._state;
	if (_S.align == 'start')
		b1 = point.x > 0 && point.x < _S.width;
	if (_S.align == 'center')
		b1 = point.x > -_S.width/2 && point.x < _S.width/2;
	if (_S.align == 'end')
		b1 = point.x > -_S.width && point.x < 0;

	if (_S.baseline == 'top')
		b2 = point.y > 0 && point.y < _S.height;
	if (_S.baseline == 'middle')
		b2 = point.y > -_S.height/2 && point.y < _S.height/2;
	if (_S.baseline == 'bottom')
		b2 = point.y > -_S.height && point.y < 0;
    	return b1 && b2;
};

p.draw = function(ctx) {
	Writer.prototype.draw.apply(this, arguments);
	var _S = this._state;
	if(_S.shouldMeasure) {
		_S.width = ctx.measureText(_S.prefix+_S.text).width;
		_S.shouldMeasure = false;
	}
}

module.exports = HitableWriter;
