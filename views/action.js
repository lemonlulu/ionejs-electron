var React = require("react");
var ReactDOM = require("react-dom");

var EventEmitter = require("events");

var eventEmitter = new EventEmitter();

var Action = React.createClass({
	handleClick: function() {
		var type = this.props.type;
		var data = this.props.data;
		eventEmitter.emit(type, data);
	},
	render: function() {
		return <div onClick={this.handleClick}>{this.props.children}</div>;
	}
});

module.exports = Action;
module.exports.actions = {
	on : function() {
		EventEmitter.prototype.on.apply(eventEmitter, arguments);
	}
};
