var ionejs = require('ionejs');
var One = ionejs.One;
var _ = require('underscore');
var inherits = ionejs.inherits;
var HitableWriter =  require('./HitableWriter');

var SpinWriter = function(options) {
	One.apply(this, arguments);
}

var p = inherits(SpinWriter, One);

p.init = function() {
	var me = this;
	var _S = this._state;
	_S.angle = 0;
	me.addEventListener('mouseout', function(e) {
		_S.turned = false;
	});
	me.addEventListener('mousein', function(e) {
		_S.turned = true;
	});
	var front = ionejs.create({
		alias: 'writers.HitableWriter',
		options: {
			name: 'front',
			baseline: 'middle',
			align: 'center',
	    		text: 'hello',
	    		height: 20,
			alpha: 1,
		}
	});
	var back = ionejs.create({
		alias: 'Writer',
		options: {
			name: 'back',
			baseline: 'middle',
			align: 'center',
	    		text: 'world',
			alpha: 0
		}
	});
	front.mode('hitable');
	this.addChild(front);
	this.addChild(back);
};

p.update = function() {
	var _S = this._state;
	if (_S.turned && _S.angle < 180) _S.angle += 3;
	else if (!_S.turned && _S.angle > 0) _S.angle -= 3;
	else return;
	var front = this.query('front');
	var back = this.query('back');
	front._state.y = Math.sin(_S.angle * Math.PI/180);
	front._state.alpha = 0.5 + 0.5 * Math.cos(_S.angle * Math.PI/180);
	back._state.y = - Math.sin(_S.angle * Math.PI/180);
	back._state.alpha = 0.5 - 0.5 * Math.cos(_S.angle * Math.PI/180);
};

module.exports = SpinWriter;
