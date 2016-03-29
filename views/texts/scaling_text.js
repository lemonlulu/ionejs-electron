var React = require("react");
var ReactDOM = require("react-dom");
var Gradual = require("../mixins/gradual.js");
var _ = require("underscore");

var ScalingText = React.createClass({
	getDefaultProps: function() {
		return {
			position: "absolute",
			top: "0px",
			left: "0px",
			content: "",
    			size: 20,
    			normalColor: "#000",
    			highlightColor: "#777",
			fontFamily: '' 
		};
	},
    	mixins: [Gradual(1/3, 60, {})],
	handleMouseIn: function() {
		this.originWidth = this.originWidth || ReactDOM.findDOMNode(this).offsetWidth;
		this.originHeight = this.originHeight || ReactDOM.findDOMNode(this).offsetHeight;
		this.setActive(true);
	},
	handleMouseOut: function() {
		this.setActive(false);
	},
	render: function() {
		var props = _.clone(this.props);
		var state = this.state;
		var left = this.originWidth? "calc("+props.left+" - "+(this.originWidth*state.alpha/40)+"px"+")" : props.left;
		var top = this.originHeight? "calc("+props.top+" - "+(this.originHeight*state.alpha/40)+"px"+")" : props.top;
		console.log(left, top);
		var style = {
			width: "auto",
			left: left,
			color: state.active ? props.highlightColor : props.normalColor,
			fontSize: props.size * (1+state.alpha/20),
		};
		var others = _.omit(props, "highlightColor", "normalColor", "size", "content");
		style = _.defaults(style, others);
		return (<div style={style} onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>{this.props.content}</div>);
	}
});

module.exports = ScalingText;
