var ionejs = require("ionejs");
var uonejs = require("./views/ionejs");

var stageConfig = {
	alias: "Stage",
	options: {},
	children: [{
		alias: "painters.RotatingPainter",
		options: {
			name: "image",
			src: "http://dimg04.c-ctrip.com/images/vacations/153000/152539/832e4d1669aa48b7928664030d7b3b1f.jpg"
		},
		children: []
	}, {
		alias: "Writer",
		options: {
			text: "Hello Ionejs",
			color: "#FF1275"
		},
		children: []
	}]
}

var stage = ionejs.create(stageConfig);
ionejs.instance.init(stage, document.getElementById('canvas'));
ionejs.instance.run();
ionejs.instance._debug = false;
