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
		var Ds = me._descriptors[config.alias];
		var one = new G(options);
		
		for(var i = 0, l = children.length; i < l; i++){
			var child = _parse(children[i]);
			one.addChild(child);
		}

		if (!!Ds) {
			for (var i = 0; i < Ds.length; i++) {
				var D = Ds[i];
				var descriptor = new D({
					options: options,
					children: children
				});
				one.addChild(descriptor);
			}
		}

		return one;
	}

	return _parse(config);
};

var parser = new Parser();
module.exports = parser;
