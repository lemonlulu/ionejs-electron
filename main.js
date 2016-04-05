var React = require("react");
var ReactDOM = require("react-dom");

var Board = require("./views/board");
var Nav = require("./views/nav")
var Popups = require("./views/popups")

//Actions
Actions = require("./views/react/action").actions;
//Controllers
Controllers = require("./controllers");


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
		<Popups />
		<Nav left="280px" top="0px"/>
		<Board left="0px" top="0px" controller={Controllers.board}/>
		</App>,
		document.getElementById("app")
		);
