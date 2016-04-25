var ionejs = require("ionejs");
var uonejs = require("./ionejs");

var stageConfig = {
    "alias": "Stage",
    "options": {
        "hitable": true,
        "width": 1667,
        "height": 611,
        "active": true,
        "visible": true,
        "moveable": false,
        "dropable": false,
        "x": 0,
        "y": 0,
        "regX": 0,
        "regY": 0,
        "rotation": 0,
        "scaleX": 1,
        "scaleY": 1,
        "skewX": 0,
        "skewY": 0,
        "alpha": 1
    },
    "children": [{
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
        }]
};

var stage = uonejs.create(stageConfig);
ionejs.instance.init(stage, document.getElementById('app'));
ionejs.instance.run();
ionejs.instance.dropable();
ionejs.instance.moveable();
