var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var ionejs = require("ionejs");
var uonejs = require("./ionejs");

var stageConfig = {
	alias: "Stage",
	options: {},
	children: [{
		alias: "Painter",
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

var Board = React.createClass({
	componentDidMount: function() {
		var stage = uonejs.create(stageConfig);
		ionejs.instance.init(stage, ReactDOM.findDOMNode(this));
		ionejs.instance.run();
		ionejs.instance._debug = false;
		ionejs.instance.dropable();
		ionejs.instance.moveable();
		this.props.controller && this.props.controller.bind(stage);
	},
	render: function() {
		var style = _.clone(this.props);
		return <canvas style={style} />;
	}
});

module.exports = Board;
