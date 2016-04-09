var ionejs = require('ionejs');
var _ = require('underscore');

var Animator = function(options) {
    _.defaults(options, {
        f: 0,
        current: 0,
        frame: 60,
        srcs: [
            'http://www.52ij.com/uploads/allimg/160317/1110104P8-4.jpg',
            'http://banbao.chazidian.com/uploadfile/2016-01-25/s145368924044608.jpg'
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
