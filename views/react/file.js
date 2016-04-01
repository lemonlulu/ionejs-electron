var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore"); 

var Cycle = require("./mixins/cycle");

var File = React.createClass({	
	getDefaultProps: function() {
		return {
			position: "absolute",
			top: "0px",
			left: "0px",
			content: "",
			fontSize: 24,
			highlightColor: "#777",
			fontFamily: '',
			align: "center",
		};
	}, 
	componentDidMount: function() {
		this.props.controller && this.props.controller.bind(this);
	},	
	active: function() {
		this.setActive(true);
	}, 
	genStr: function(alpha) {
		return "LoadingImage"+new Array(Math.round(alpha*10)).join(".");
	},	
	inactive: function() {
		this.setActive(false);
	},
	mixins: [Cycle(1/10, 10, {})],
	render: function() {
		var me = this;
		var props = _.clone(this.props);
		var state = me.state;
		var padStyle = _.omit(props, "display", "left", "top", "position", "width", "height");
		padStyle = _.defaults(padStyle, {
			background: "#FFF",
			opacity: 1,
			display: state.active === true ? "block": "none",
			position: "inherit",
			left: "0",
			top: "0",
			width: "100%",
			height: "100%"
		});
		return 	(
			<div style={padStyle}>
				<div style={{position:props.position, left:props.left, top:props.top, textAlign:"center"}}>{me.genStr(state.alpha)}</div>
			</div>
		);
	}
});

module.exports = File;
