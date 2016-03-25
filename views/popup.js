var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var ionejs = require("ionejs");

var stageConfig = {
	alias: "Stage",
	options: {},
	children: [{
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
		var stage = ionejs.create(stageConfig);
		ionejs.instance.init(stage, ReactDOM.findDOMNode(this))
		ionejs.instance.run();
		this.props.controller && this.props.controller.bind(stage);
	},
	render: function() {
		var style = _.defaults({position: "absolute"}, this.props);
		return <canvas style={style}/>;
	}
});

module.exports = Board;
