var React = require("react");

var Popup = require("./popup");

var layout = [
	{ title: "file", actions: ["open", "close"]},
	{ title: "shape", actions: ["crop", "resize"]},
	{ title: "effect", actions: ["watermark", "digimark"]}];

var Nav = React.createClass({
	propTypes: {
		text: React.PropTypes.number
	},
	getInitialState: function() {
		return {text: this.props.text};
	},
	render: function() {
		var nav = (<div></div>);
		return (<div>
			{
				layout.map(function(p) {
					return <Popup key={p.title} 
					title={p.title} actions={p.actions}></Popup>;
				})
			}
			</div>);
	}
});

module.exports = Nav;
