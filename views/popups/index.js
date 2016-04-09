var React = require("react");
var ReactDOM = require("react-dom");
var PainterEditor = require("./PainterEditor");
var WriterEditor = require("./WriterEditor");

var Popups = React.createClass({
	render: function() {
		return (
			<div style={{position: 'inherit', height:'100%', width:'100%'}}>
				<PainterEditor />
				<WriterEditor />
			</div>
			);
	}
});


module.exports = Popups;
