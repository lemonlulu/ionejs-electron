var ionejs = require("ionejs");
var uonejs = require("./views/ionejs");

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
        "alias": "Cliper",
	"options": {
		x: -440,
		y: -40,
		startX: 440,
		startY: 0,
		width: 800,
		height: 540
	},
	"children": [
        {
            "alias": "Writer",
            "options": {
                "text": "Ctrip.Tech",
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
                "x": 145,
                "y": 291,
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
        },
        {
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
        },
        {
            "alias": "Writer",
            "options": {
                "text": "4.0",
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
                "x": 350,
                "y": 287,
                "regX": 0,
                "regY": 0,
                "rotation": 0,
                "scaleX": 2,
                "scaleY": 4,
                "skewX": 0,
                "skewY": 0,
                "alpha": 1
            },
            "children": []
        },
        {
            "alias": "Painter",
            "options": {
                "name": "a1",
                "active": true,
                "visible": true,
                "hitable": true,
                "moveable": true,
                "dropable": false,
                "x": 440,
                "y": 34,
                "regX": 0,
                "regY": 0,
                "rotation": 0,
                "scaleX": 1,
                "scaleY": 1,
                "skewX": 0,
                "skewY": 0,
                "alpha": 1,
                "src": "resources/travel.jpg"
            },
            "children": []
        },
        {
            "alias": "painters.Animator",
            "options": {
                "name": "sun",
                "f": 4,
                "current": 1,
                "frame": 20,
                "srcs": [
                    "resources/spark/8.png",
                    "resources/spark/9.png",
                    "resources/spark/10.png"
                ],
                "active": true,
                "visible": true,
                "hitable": true,
                "moveable": true,
                "dropable": false,
                "x": 584,
                "y": 82,
                "regX": 0,
                "regY": 0,
                "rotation": 0,
                "scaleX": 1,
                "scaleY": 1,
                "skewX": 0,
                "skewY": 0,
                "alpha": 0.8,
                "src": "resources/spark/9.png"
            },
            "children": []
        },
        {
            "alias": "painters.RotatingPainter",
            "options": {
                "name": "earth",
                "src": "resources/earth.png",
                "speed": 1,
                "active": true,
                "visible": true,
                "hitable": true,
                "moveable": true,
                "dropable": false,
                "x": 831,
                "y": 980,
                "regX": -368.5,
                "regY": -368.5,
                "rotation": 223,
                "scaleX": 1.5,
                "scaleY": 1.5,
                "skewX": 0,
                "skewY": 0,
                "alpha": 1,
                "speed":-0.6
            },
            "children": []
        },
         {
            "alias": "painters.RotatingPainter",
            "options": {
                "name": "plane",
                "src": "resources/plane.png",
                "speed": 1,
                "active": true,
                "visible": true,
                "hitable": true,
                "moveable": true,
                "dropable": false,
                "free": true,
                "x": 837,
                "y": 1073,
                "regX": -36,
                "regY": -936,
                "rotation": 356.5,
                "scaleX": 1,
                "scaleY": 1,
                "skewX": 0,
                "skewY": 0,
                "alpha": 1,
                "speed":0.5
            },
            "children": []
        },
        {
            "alias": "writers.SpinWriter",
            "options": {
                "name": "motto",
                "texts": ["携程在手", "说走就走"],
                "color": "#FFFFFF",
                "shouldMeasure": false,
                "hitable": true,
                "prefix": "",
                "align": "start",
                "baseline": "top",
                "active": true,
                "visible": true,
                "moveable": true,
                "dropable": false,
                "x": 1050,
                "y": 150,
                "regX": 0,
                "regY": 0,
                "rotation": 0,
                "scaleX": 1,
                "scaleY": 1,
                "skewX": 0,
                "skewY": 0,
                "alpha": 1,
                "font":"Bold Italic 40px 黑体"
            },
            "children": []
        }
    ]
    }]
};

var stage = ionejs.create(stageConfig);
ionejs.instance.init(stage, document.getElementById('canvas'));
ionejs.instance.run();
ionejs.instance._debug = false;
