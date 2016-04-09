var ionejs = require("ionejs");
var others = require("./others");
var descriptors = require("./descriptors");

var parser = require('./parser');
parser.setDescriptors(descriptors);
parser.setOnes(others);
parser.setOne('Stage', ionejs.Stage);
parser.setOne('Painter', ionejs.Painter);
parser.setOne('Writer', others['writers.HitableWriter']);

module.exports.create = function(config) {
	return parser.parse(config);
};
