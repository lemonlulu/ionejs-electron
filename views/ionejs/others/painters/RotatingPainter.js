var ionejs = require('ionejs');
var _ = require('underscore');

var RotatingPainter = function(options) {
	_.defaults(options, {
		free: false,
		speed: 1
	});
    ionejs.Painter.apply(this, arguments);
}

var p = ionejs.inherits(RotatingPainter, ionejs.Painter);

p.update = function() {
	var _S = this._state;
	ionejs.Painter.prototype.update.apply(this);
    _S.rotation += _S.speed;
    _S.rotation %= 360;
    var image = _S.image
    if (image && !_S.free) {
	    _S.regX = -image.width/2;
	    _S.regY = -image.height/2;
    }
}

module.exports = RotatingPainter;
