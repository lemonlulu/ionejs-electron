var ionejs = require('ionejs');
var _ = require('underscore');
var inherits = ionejs.inherits;
var HitableWriter =  require('./HitableWriter');

var DualWriter = function(options) {
	HitableWriter.apply(this, arguments);
}

var p = inherits(DualWriter, HitableWriter);

p.init = function() {
	var me = this;
	var _S = this._state;
	me.addEventListener('mouseout', function(e) {
		_.extend(me._state, me._state.out);
		_S.shouldMeasure = true;
	});
	me.addEventListener('mousein', function(e) {
		_.extend(me._state, me._state.in);
		_S.shouldMeasure = true;
	});
};

module.exports = DualWriter;
