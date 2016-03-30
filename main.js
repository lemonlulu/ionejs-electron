var React = require("react");
var ReactDOM = require("react-dom");


//View
var Nav = require("./views/nav");
//Board
var Board = require("./views/board");

var Popups = require("./views/popups");

var File = require("./views/file");

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
		<Popups.OpenFile zIndex="10" />
		<File fontSize="30" opacity="0.9" top="50%" left="48%" position="absolute" controller={Controllers.file} zIndex="11" />
		<Board position="absolute" left="0px" top="0px" controller={Controllers.board}/>
		<Nav position="absolute" left="280px" top="0px"/>
		</App>,
		document.getElementById("app")
		);
