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
    var S = I.state;
    I.images = [];
    for (var i in S.srcs) {
        var image = new Image();
        image.src = S.srcs[i];
        I.images[i] = image;
    }
}

p.update = function() {
    var I = this;
    var S = I.state;
    S.f++;
    if (S.f == S.frame) {
        S.f = 0;
        S.current++;
    }
    if (S.current == S.srcs.length) {
        S.current = 0;
    }
    S.src = S.srcs[S.current];
    I.image = I.images[S.current];
}

module.exports = Animator;
