var ionejs = require("ionejs");
var uonejs = require('uonejs');
var descriptors = require("./descriptors");
var parser = require('./parser');
parser.setDescriptors(descriptors);
parser.setOnes(uonejs);
parser.setOne('Stage', ionejs.Stage);
parser.setOne('Cliper', ionejs.Cliper);
parser.setOne('Phantom', ionejs.Phantom);
parser.setOne('Painter', ionejs.Painter);
parser.setOne('Writer', uonejs['writers.HitableWriter']);

module.exports.create = function(config) {
	return parser.parse(config);
};
