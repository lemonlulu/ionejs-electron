var ionejs = require('ionejs');
var _ = require('underscore');

var RotatingPainter = function(options) {
    ionejs.Painter.apply(this, arguments);
}

var p = ionejs.inherits(RotatingPainter, ionejs.Painter);

p.update = function() {
	ionejs.Painter.prototype.update.apply(this);
    this._state.rotation += 3;
    this._state.rotation %= 360;
    var image = this._state.image
    if (image) {
	    this._state.regX = -image.width/2;
	    this._state.regY = -image.height/2;
    }
}

module.exports = RotatingPainter;
