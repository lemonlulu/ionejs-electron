var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");
var Gradual = require("../mixins/gradual.js");

var FadeText = React.createClass({
	getDefaultProps: function() {
		return {
			content: "",
    			size: 20,
    			align: "left",
    			normalColor: "#000",
    			highlightColor: "#777",
			fontFamily: ''
		};
	},
	propTypes: {
		content: React.PropTypes.string,
    		size: React.PropTypes.number,
		align: React.PropTypes.string,
		normalColor: React.PropTypes.string,
		highlightColor: React.PropTypes.string
	},
	mixins: [Gradual(1/10, 60, {})], 
	active: function() {
		this.setActive(true);
	},
	inactive: function() {
		this.setActive(false);
	}, 
	render: function() {
		var props = _.clone(this.props);
		var state = this.state;
		var style = {
			opacity:state.alpha,
			display:state.alpha > 0.1 ? "block" : "none",
			color: props.normalColor,
			fontSize: props.size,
		};
		var others = _.omit(props, "align", "highlightColor", "normalColor", "size", "content");
		style = _.defaults(style, others);
		return (<div style={style} onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>{this.props.content}</div>);
	}
});

module.exports = FadeText;
