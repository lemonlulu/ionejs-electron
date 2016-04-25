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
	var S = this.state;
	S.angle = 0;
	S.switching = false;
	S.turned = false;
	S.current = 0;
	me.addEventListener('mouseout', function(e) {
		S.turned = false;
	});
	me.addEventListener('mousein', function(e) {
		S.turned = true;
	});
	var front = ionejs.create({
		alias: 'writers.HitableWriter',
		options: {
			name: 'front',
			baseline: 'middle',
			align: 'center',
	    		text: S.texts[0],
	    		prefix: S.prefix,
	    		height: 20,
			alpha: 1,
			font: S.font,
			color: S.color
		}
	});
	var back = ionejs.create({
		alias: 'Writer',
		options: {
			name: 'back',
			baseline: 'middle',
			align: 'center',
	    		text: S.texts[1],
	    		prefix: S.prefix,
			alpha: 0,
			font: S.font,
			color: S.color
		}
	});
	front.mode('hitable');
	this.addChild(front);
	this.addChild(back);
};

p.update = function() {
	var S = this.state;
	var length = this.state.texts.length;
	var front = this.query('front');
	var back = this.query('back');
	if (!S.switching && S.turned) {
		S.current += 1;
		S.current %= length;
		S.process %= length;
		next = (S.current + 1) % length;
		front.state.text = S.texts[S.current];
		back.state.text = S.texts[next];
		S.angle = 0;
		S.switching = true;
	}
	if (S.switching) {
		S.angle += 1.5; 
		front.state.y = Math.sin(S.angle * Math.PI/180);
		front.state.alpha = 0.5 + 0.5 * Math.cos(S.angle * Math.PI/180);
		back.state.y = - Math.sin(S.angle * Math.PI/180);
		back.state.alpha = 0.5 - 0.5 * Math.cos(S.angle * Math.PI/180);
		if (S.angle >= 180) {
			S.switching = false;
		}
	}
};

module.exports = SpinWriter;
