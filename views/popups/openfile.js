var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var ScalingText = require("../react/texts/scaling_text");
var FadeText = require("../react/texts/fade_text");
var Action = require("../action");
var Gradual = require("../mixins/gradual");

var OpenFile = React.createClass({
	getInitialState: function() {
		return {
			focus: false
		};
	},
	componentDidMount: function() {
		var me = this;
		Actions.on("File.Open", function() {
			me.setActive(true);
			me.refs.infoText.active();
		});
		Actions.on("Submit.OpenFile", function() {
	        	me.setState({value: ""});
		});

	},
	handleChange: function(event) {
		var value = event.target.value;
	        this.setState({value: value});
		if (value.length > 0) {
			this.refs.confirmText.active();
		} else {
			this.refs.confirmText.inactive();
		}
	},
	handleInputClick: function(event) {
		event.preventDefault();
	},
    	handleClick: function(event) {
		if (this.state.focus) {
	        	this.setState({value: ""});
			this.refs.confirmText.inactive();
			this.setActive(false);
		}
		else {  
			ReactDOM.findDOMNode(this.refs.textInput).focus();
			this.refs.infoText.inactive();
		}
		this.setState({focus: !this.state.focus});
		event.stopPropagation();
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
				<input ref="textInput" type="text" value={state.value} onChange={this.handleChange} onMouseDown={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"38.2%", textAlign:"center", width:"76.4%", border:"0px"}} ></input>
				<FadeText ref="infoText" content="Click Anywhere to Focus" position="absolute" left="38.2%" top="23.6%" size={24}></FadeText>
				<Action type="Submit.OpenFile" data={state.value}>
				<FadeText ref="confirmText" content="Enter to Confirm" position="absolute" left="61.8%" top="61.8%" size={24}></FadeText>
				</Action>
			</div>);
	}
});

module.exports = OpenFile;
