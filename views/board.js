var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");


var ionejs = require("ionejs");

var stage = {
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
		ionejs.instance.init(ionejs.create(stage), ReactDOM.findDOMNode(this))
		ionejs.instance.run();
	},
	render: function() {
		var style = _.defaults({position: "absolute"}, this.props);
		return <canvas style={style}/>;
	}
});

module.exports = Board;
