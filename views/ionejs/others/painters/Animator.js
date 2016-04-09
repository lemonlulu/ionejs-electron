var ionejs = require('ionejs');
var _ = require('underscore');

var Animator = function(options) {
   _.defaults(options, {
        f: 0,
        current: 0,
        frame: 6,
        srcs: [
            'resources/spark/1.png',
            'resources/spark/2.png',
            'resources/spark/3.png',
            'resources/spark/4.png',
            'resources/spark/5.png',
            'resources/spark/6.png',
            'resources/spark/7.png',
            'resources/spark/8.png',
            'resources/spark/9.png',
            'resources/spark/10.png',
        ]
    });
    ionejs.Painter.apply(this, arguments);
}

var p = ionejs.inherits(Animator, ionejs.Painter);

p.init = function() {
    var I = this;
    var _S = I._state;
    _S.images = [];
    for (var i in _S.srcs) {
        var image = new Image();
        image.src = _S.srcs[i];
        _S.images[i] = image;
    }
}

p.update = function() {
    var I = this;
    var _S = I._state;
    _S.f++;
    if (_S.f == _S.frame) {
        _S.f = 0;
        _S.current++;
    }
    if (_S.current == _S.srcs.length) {
        _S.current = 0;
    }
    _S.src = _S.srcs[_S.current];
    _S.image = _S.images[_S.current];
}

module.exports = Animator;
