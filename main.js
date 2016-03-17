var React = require("react");
var ReactDOM = require("react-dom");

var Nav = require("./views/nav");

window._ = require("underscore");

ReactDOM.render(
		<Nav/>,
		document.getElementById("app")
		);
