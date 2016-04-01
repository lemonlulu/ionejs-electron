var React = require("react");
var ReactDOM = require("react-dom");

//Board
var Board = require("./views/board");

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
		<Board position="absolute" left="0px" top="0px" controller={Controllers.board}/>
		</App>,
		document.getElementById("app")
		);
