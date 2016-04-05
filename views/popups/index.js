var React = require("react");
var ReactDOM = require("react-dom");
var PainterEditor = require("./PainterEditor");

var Popups = React.createClass({
	render: function() {
		return (
			<PainterEditor />
			);
	}
});


module.exports = Popups;
