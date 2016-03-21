var React = require("react");
var ReactDOM = require("react-dom");


//View
var Nav = require("./views/nav");
//Controllers
var controllers = require("./controllers");

var App = React.createClass({
	disableEvent: function(event) {
		event.preventDefault();
		event.stopPropagation();
	},
    	render: function() {
		return (
			<div style={{position:"fixed", width:"100%", height:"100%"}}>
				{this.props.children}
			</div>);
	}
});

ReactDOM.render(
		<App>
		<Nav left="280px" top="0px"/>
		</App>,
		document.getElementById("app")
		);
