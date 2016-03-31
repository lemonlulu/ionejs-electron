var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var ScalingText = require("../texts/scaling_text")
var Action = require("../action")
var Gradual = require("../mixins/gradual");

var OpenFile = React.createClass({
	componentDidMount: function() {
		var me = this;
		Actions.on("ionejs.Painter.Edit", function(options) {
			me.setState({options: options});
			me.setActive(true);
			window.o1 = options;
		});
		Actions.on("Submit.ionejs.Painter.Edit", function() {
	        	me.setState({value: ""});
		});

	},
    	handleChangeNumber: function(event) {
		var options = this.state.options;
		var name = event.target.name;
		var value = event.target.value;
		console.log(name, value);
		if (value.length == 0)
			value = 0;
		else if (value.length > 2 && value.startsWith("0"))
			value = parseFloat(value.slice(1, value.length));
		else 
			value = parseFloat(value);
		if (!isNaN(value)) {
			options[name] = value;
			this.setState({options: options});
		}
	},
	handleInputClick: function(event) {
		event.stopPropagation();
	},
    	handleClick: function(event) {
		this.setActive(false);
	},
	mixins: [Gradual(1/8, 60, {value: "", options: {}})],
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
				<input type="text" name="x" value={state.options.x} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"28.2%", left:"38.2", width:"50px"}} ></input>
				<input type="text" name="y" value={state.options.y} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"33.2%", left:"38.2", width:"50px"}} ></input>
				<input type="text" name="alpha" value={state.options.alpha} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"38.2%", left:"38.2", width:"50px"}} ></input>

				<Action type="Submit.ionejs.Painter.Edit" data={state.value}>
				<ScalingText content="Confirm" position="absolute" left="61.8%" top="61.8%" size={24}></ScalingText>
				</Action>
			</div>);
	}
});

module.exports = OpenFile;
