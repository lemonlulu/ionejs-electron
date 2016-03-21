var React = require("react");
var ReactDOM = require("react-dom");

var EventEmitter = require("events");

var eventEmitter = new EventEmitter();

var Action = React.createClass({
	handleClick: function() {
		var type = this.props.type;
		console.log("in emit", type);
		eventEmitter.emit(type);
	},
	render: function() {
		return (
			<div onClick={this.handleClick}>{this.props.children}</div>
			);
	}
});



module.exports = Action;
module.exports.on = function() {
	console.log(eventEmitter);
	console.log("in actions.js", arguments);
	EventEmitter.prototype.on.apply(eventEmitter, arguments);
};
