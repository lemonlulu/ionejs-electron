var React = require("react");
var ReactDOM = require("react-dom");


//View
var Nav = require("./views/nav");
//Board
var Board = require("./views/board");

var Popups = require("./views/popups");

//Actions
Actions = require("./views/action").actions;
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
		<Popups.OpenFile position="fixed" left="30%" top="30%" zIndex="10"/>
		<Nav position="absolute" left="280px" top="0px"/>
		<Board position="absolute" left="280px" top="150px" controller={Controllers.board}/>
		</App>,
		document.getElementById("app")
		);
