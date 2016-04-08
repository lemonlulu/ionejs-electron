var ionejs = require('ionejs');
var parser = require('../../parser');
var inherits = ionejs.inherits;
var blur = ionejs.blur;
var Writer = ionejs.Writer;
var Descriptor = require('../Descriptor');
var FamilyChild = require('./FamilyChild');
var FamilyNewChild = require('./FamilyNewChild');
var _ = require('underscore');

var Family = function(options) {
	_.extend(options, {
		alpha: 0,
		beta: 0,
		rate: 1/40,
		path: 'stage'
	});
	Descriptor.apply(this, arguments);
}

var p = inherits(Family, Descriptor);

p.init = function() {
	var I = this;
	I.getSource().addEventListener('hold', this.open.bind(this));
	var demo;
	var x = 1000;
	var y = 170;
	var t;
	I.addEventListener('Select', function(e) {
		demo = ionejs.create({
			alias: e.data.config.alias,
		    	options: e.data.config.options
		});
		t = x;
		x = demo._state.x;
		demo._state.x = t;
		t = y;
		y = demo._state.y;
		demo._state.y = t;
		I.addChild(demo);
	});
	I.addEventListener('Unselect', function(e) {
		t = demo._state.x;
		demo._state.x = x;
		x = t;
		t = demo._state.y;
		demo._state.y = y;
		y = t;
		I.removeChild(demo);
	});
	I.addEventListener('OpenEditor', function(e) {
		I.close();
		Actions.emit("ionejs."+ e.data.config.alias +".Edit", e.data.config.options);
	});
	I.addEventListener('NewOne', function(e) {
		var config = {
			alias: e.data.alias,
			options: {},
			children: []
		}
		var newOne = parser.parse(config);
		newOne._init();
		var current = I.getSource();
		current.addChild(newOne);
		I._state.children.push(config);
		I.close();
		Actions.emit("ionejs."+ e.data.alias +".Edit", config.options);
	});
};

p.open = function() {
	this._state.beta = 1;
	this.sync();
};

p.close = function() {
	this._state.beta = 0;
	this.removeAllChildren();
};

p.sync = function() {
	var path = new Writer({
		x: 160,
		y: 200,
		name: 'path',
		text: 'stage',
		prefix: 'PATH    '
	});
	this.addChild(path);
	var children = this._state.children;
	for (var i in children) {
		var alias = children[i].alias;
		var options = children[i].options;
		var name = options.name;
		var child = new FamilyChild({
			x: (i%3>>0)*200 + 500,
			y: (i/3>>0)*200 + 160,
			config: children[i]
		});
		child.init();
		child.mode('dropable');
		this.addChild(child);
	}
	i++;
	var child = new FamilyNewChild({
		x: (i%3>>0)*200 + 500,
		y: (i/3>>0)*200 + 160,
		name: 'new_tag',
		texts: ['One', 'Painter', 'Writer'],
		prefix: 'new '
	});
	child.init();
	child.mode('dropable');
	this.addChild(child);
};

p.update = function() {
	blur(this._state, 'alpha', this._state.beta, 1/6);
};

p.draw = function(ctx) {
	try {
        	ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, this.getSource()._state.width, this.getSource()._state.height);
	} catch (e) {}
};

module.exports = Family;
