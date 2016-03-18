var React = require("react");
var ReactDOM = require("react-dom");

var Nav = require("./views/nav");

var App = React.createClass({
	disableEvent: function(event) {
		event.preventDefault();
		event.stopPropagation();
	},
    	render: function() {
		return (
			<div style={{position:"fixed", width:"100%", height:"100%"}}>
			<Nav left="280px" top="0px"/>
			</div>);
	}
});


ReactDOM.render(
		<App></App>,
		document.getElementById("app")
		);
