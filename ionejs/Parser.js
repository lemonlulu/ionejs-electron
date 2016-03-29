var Parser = function(){
	this._ones = {};
	this._descriptors = {};
};

var p = Parser.prototype;

p.setOne = function(alias, constructor){
	this._ones[alias] = constructor;
};

p.setOnes = function(constructors) {
	this._ones = constructors;
};

p.setDescriptor = function(alias, constructor){
	this._descriptors[alias] = constructor;
}

p.setDescriptors = function(constructors) {
	this._descriptors = constructors;
};

p.parse = function(config){
	var me = this;
	var _parse = function(config){
		var options = config.options;
		var children = config.children;

		var G = me._ones[config.alias]
		var D = me._descriptors[config.alias];

		var one = new G(options);
		var descriptor = new D(options);

		descriptor.addChild(one);
		
		for(var i = 0, l = children.length; i < l; i++){
			var child = _parse(children[i]);
			one.addChild(child);
		}
		return descriptor;
	}

	return _parse(config);
};

p.deparse = function() {

};

var parser = new Parser();
parser.setOnes(require("./ones"));
parser.setDescriptors(require("./descriptors"));

module.exports = parser;
