var React = require("react");
var ReactDOM = require("react-dom");
var _ = require("underscore");

var ScalingText = require("../react/texts/scaling_text")
var Action = require("../react/action")
var Gradual = require("../react/mixins/gradual");

var WriterEditor = React.createClass({
	componentDidMount: function() {
		var me = this;
		Actions.on("ionejs.Writer.Edit", function(options) {
			me.setState({options: options});
			me.setActive(true);
		});
		Actions.on("ionejs.writers.SpinWriter.Edit", function(options) {
			me.setState({options: options});
			me.setActive(true);
		});
		Actions.on("Submit.ionejs.Writer.Edit", function() {
	        	me.setState({value: ""});
		});

	},
    	handleChangeNumber: function(event) {
		var options = this.state.options;
		var name = event.target.name;
		var value = event.target.value;
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
	handleChangeString: function(event) {
		var options = this.state.options;
		var name = event.target.name;
		var value = event.target.value;
		options[name] = value;
		options.shouldMeasure=true;
		this.setState({options: options});
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
				<div style={{position:"absolute", fontSize:24, fontWeight:"bold", top:"3.2%", left:"calc(28.2% - 50px)", width:"38.2%"}}>name</div>
				<input type="text" name="name" value={state.options.name} onChange={this.handleChangeString} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"3.2%", left:"35%", width:"38.2%", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, fontWeight:"bold", top:"8.2%", left:"calc(28.2% - 50px)", width:"38.2%"}}>text</div>
				<input type="text" name="text" value={state.options.text} onChange={this.handleChangeString} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"8.2%", left:"35%", width:"38.2%", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"13.2%", left:"calc(28.2% - 50px)", width:"100px"}}>x</div>
				<input type="text" name="x" value={state.options.x} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"13.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"18.2%", left:"calc(28.2% - 50px)", width:"100px"}}>y</div>
				<input type="text" name="y" value={state.options.y} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"18.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"23.2%", left:"calc(28.2% - 50px)", width:"100px"}}>regX</div>
				<input type="text" name="regX" value={state.options.regX} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"23.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"28.2%", left:"calc(28.2% - 50px)", width:"100px"}}>regY</div>
				<input type="text" name="regY" value={state.options.regY} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"28.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"33.2%", left:"calc(28.2% - 50px)", width:"100px"}}>rotation</div>
				<input type="text" name="rotation" value={state.options.rotation} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"33.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"38.2%", left:"calc(28.2% - 50px)", width:"100px"}}>sacleX</div>
				<input type="text" name="scaleX" value={state.options.scaleX} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"38.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"43.2%", left:"calc(28.2% - 50px)", width:"100px"}}>sacleY</div>
				<input type="text" name="scaleY" value={state.options.scaleY} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"43.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"48.2%", left:"calc(28.2% - 50px)", width:"100px"}}>skewX</div>
				<input type="text" name="skewX" value={state.options.skewX} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"48.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"53.2%", left:"calc(28.2% - 50px)", width:"100px"}}>skewY</div>
				<input type="text" name="skewY" value={state.options.skewY} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"53.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>
				<div style={{position:"absolute", fontSize:24, top:"58.2%", left:"calc(28.2% - 50px)", width:"100px"}}>alpha</div>
				<input type="text" name="alpha" value={state.options.alpha} onChange={this.handleChangeNumber} onClick={this.handleInputClick}
					style={{position:"absolute", fontSize:24, top:"58.2%", left:"35%", width:"50px", textAlign:"left", border: "0px"}} ></input>

				<Action type="Submit.ionejs.Writer.Edit" data={state.value}>
				<ScalingText content="Confirm" position="absolute" left="35%" top="calc(61.8% + 50px)" size={24}></ScalingText>
				</Action>
			</div>);
	}
});

module.exports = WriterEditor;
