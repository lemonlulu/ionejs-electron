var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var Text = require("../text")
var Action = require("../action")
var Gradual = require("../mixins/gradual");

var OpenFile = React.createClass({
	componentDidMount: function() {
		var me = this;
		Actions.on("File.Open", function() {
			me.setActive(true);
		});
		Actions.on("Submit.OpenFile", function() {
	        	me.setState({value: ""});
			me.setActive(false);
		});

	},
	handleChange: function(event) {
	        this.setState({value: event.target.value});
	},
    	handleClick: function(event) {
		event.stopPropagation();
	},
    	handleClose: function(event) {
		this.setActive(false);
	},
	mixins: [Gradual(7/8, 60, {value: ""})],
	render: function() {
		var state = this.state;
		var popupStyle = _.pick(this.props, "position", "top", "left");
		var padStyle = _.omit(this.props, "position", "top", "left");
		padStyle = _.defaults(padStyle, {opacity: state.alpha, display:state.alpha > 0.1 ? "block": "none"});
		padStyle = _.defaults(padStyle, {position:"inherit", width:"100%", height:"100%"});
		return (
			<div style={padStyle} onClick={this.handleClose}>
			<div style={popupStyle} onClick={this.handleClick}>
				<input type="text" value={state.value} onChange={this.handleChange}></input>
				<Action type="Submit.OpenFile" data={state.value}>
				<Text content="Confirm" align="right"></Text>
				</Action>
			</div></div>);
	}
});

module.exports = OpenFile;
