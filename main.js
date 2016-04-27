var ionejs = require("ionejs");
var uonejs = require("./ionejs");

var writerConfig = {
    "alias": "Writer",
    "options": {
        "text": "Hackation",
        "color": "#7BCBEB",
        "shouldMeasure": false,
        "hitable": true,
        "width": 112.24609375,
        "height": 20,
        "prefix": "",
        "align": "start",
        "baseline": "top",
        "active": true,
        "visible": true,
        "moveable": true,
        "dropable": false,
        "x": 147,
        "y": 327,
        "regX": 0,
        "regY": 0,
        "rotation": 0,
        "scaleX": 2,
        "scaleY": 2,
        "skewX": 0,
        "skewY": 0,
        "alpha": 1
    },
    "children": []
};

var stage = new ionejs.Stage('app');
var writer = ionejs.create(writerConfig);
stage.addChild(writer);
