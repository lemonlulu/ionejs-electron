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
    var I = this, S = this.state;
    ionejs.Painter.prototype.update.apply(this);
    S.rotation += S.speed;
    S.rotation %= 360;
    var image = I.image
    if (image && !S.free) {
	    S.regX = -image.width/2;
	    S.regY = -image.height/2;
    }
}

module.exports = RotatingPainter;
