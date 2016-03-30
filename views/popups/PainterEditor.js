var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var ScalingText = require("../texts/scaling_text")
var Action = require("../action")
var Gradual = require("../mixins/gradual");

var OpenFile = React.createClass({
	componentDidMount: function() {
		var me = this;
		Actions.on("ionejs.Painter.Edit", function(options, painter) {
			me.setActive(true);
			me.options = options;
			me.painter = painter;
		});
		Actions.on("Submit.ionejs.Painter.Edit", function() {
	        	me.setState({value: ""});
		});

	},
    	handleClick: function(event) {
		this.setActive(false);
	},
	mixins: [Gradual(1/8, 60, {value: ""})],
	render: function() {
		var state = this.state;
		var padStyle = _.clone(this.props);
		padStyle = _.defaults(padStyle, {
			background: "#FFF", 
			opacity: state.alpha, 
			display:state.alpha > 0.1 ? "block": "none", 
			position:"inherit", 
			width:"100%", 
			height:"100%"});
		return (
			<div style={padStyle} onClick={this.handleClick}>
				<Action type="Submit.ionejs.Painter.Edit" data={state.value}>
				<ScalingText content="Confirm" position="absolute" left="61.8%" top="61.8%" size={24}></ScalingText>
				</Action>
			</div>);
	}
});

module.exports = OpenFile;
