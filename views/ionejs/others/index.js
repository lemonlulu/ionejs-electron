var ionejs = require('ionejs');
ionejs.register('writers.DualWriter', require('./writers/DualWriter'));
ionejs.register('writers.HitableWriter', require('./writers/HitableWriter'));
ionejs.register('writers.SpinWriter', require('./writers/SpinWriter'));
ionejs.register('painters.Animator', require('./painters/Animator'));

module.exports['writers.DualWriter'] = require('./writers/DualWriter');
module.exports['writers.HitableWriter'] = require('./writers/HitableWriter');
module.exports['writers.SpinWriter'] = require('./writers/SpinWriter');
module.exports['painters.Animator'] = require('./painters/Animator');
