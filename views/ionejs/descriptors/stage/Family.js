var ionejs = require('ionejs');
var inherits = ionejs.inherits;
var blur = ionejs.blur;
var Writer = ionejs.Writer;
var Descriptor = require('../Descriptor');
var DualWriter = require('../../ones/writers/DualWriter');
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
	var config = {
		alias: 'Stage',
		options: this._state.options, 
		children: this._state.children
	}
	this._state.ones = ionejs.create(config);
	this.getSource().addEventListener('hold', this.open.bind(this));
};

p.open = function() {
	this._state.beta = 1;
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
		var name = children[i].options.name;
		var child = new DualWriter({
			x: (i%3>>0)*200 + 500,
			y: (i/3>>0)*200 + 160,
			name: name + '_tag',
			text: name ? '-'+name : '-anonymity',
			prefix: alias,
			baseline: 'middle',
			align: 'center',
		    	height: 20,
			in: {
		    		height: 24,
				font: "Bold 24px Arial"
			},
		    	out: {
		    		height: 20,
				font: "Bold 20px Arial"
			}
		});
		//child.mode('hitable');
		child.init();
		console.log(child);
		this.addChild(child);
	}
	i++;
	var child = new Writer({
		x: (i%3>>0)*200 + 500,
		y: (i/3>>0)*200 + 160,
		name: 'new_tag',
		text: 'new One',
		baseline: 'middle',
		align: 'center'
	});
	this.addChild(child);
};

p.close = function() {
	this._state.beta = 0;
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
