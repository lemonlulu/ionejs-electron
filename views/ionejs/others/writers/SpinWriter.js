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
	_S.switching = false;
	_S.turned = true;
	_S.current = 0;
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
	    		text: _S.texts[0],
	    		prefix: _S.prefix,
	    		height: 20,
			alpha: 1,
			font: _S.font,
			color: _S.color
		}
	});
	var back = ionejs.create({
		alias: 'Writer',
		options: {
			name: 'back',
			baseline: 'middle',
			align: 'center',
	    		text: _S.texts[1],
	    		prefix: _S.prefix,
			alpha: 0,
			font: _S.font,
			color: _S.color
		}
	});
	front.mode('hitable');
	this.addChild(front);
	this.addChild(back);
};

p.update = function() {
	var _S = this._state;
	var length = this._state.texts.length;
	var front = this.query('front');
	var back = this.query('back');
	if (!_S.switching && _S.turned) {
		_S.current += 1;
		_S.current %= length;
		_S.process %= length;
		next = (_S.current + 1) % length;
		front._state.text = _S.texts[_S.current];
		back._state.text = _S.texts[next];
		_S.angle = 0;
		_S.switching = true;
	}
	if (_S.switching) {
		_S.angle += 3; 
		front._state.y = Math.sin(_S.angle * Math.PI/180);
		front._state.alpha = 0.5 + 0.5 * Math.cos(_S.angle * Math.PI/180);
		back._state.y = - Math.sin(_S.angle * Math.PI/180);
		back._state.alpha = 0.5 - 0.5 * Math.cos(_S.angle * Math.PI/180);
		if (_S.angle >= 180) {
			_S.switching = false;
		}
	}
};

module.exports = SpinWriter;
