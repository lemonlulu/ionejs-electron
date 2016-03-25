var React = require("react");
var ReactDOM = require("react-dom");

var EventEmitter = require("events");

var eventEmitter = new EventEmitter();

var Action = React.createClass({
	handleClick: function() {
		var type = this.props.type;
		eventEmitter.emit(type);
	},
	render: function() {
		return <div onClick={this.handleClick}>{this.props.children}</div>;
	}
});

module.exports = Action;
module.exports.on = function() {
	EventEmitter.prototype.on.apply(eventEmitter, arguments);
};
