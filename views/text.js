var React = require("react");
var ReactDOM = require("react-dom");

var Text = React.createClass({
	getDefaultProps: function() {
		return {
			content: "",
    			size: 20,
    			align: "left",
    			normalColor: "#000",
    			highlightColor: "#777"
		};
	},
	propTypes: {
		content: React.PropTypes.string,
    		size: React.PropTypes.number,
		align: React.PropTypes.string,
		normalColor: React.PropTypes.string,
		highlightColor: React.PropTypes.string
	},
	getInitialState: function() {
		return {active: false, alpha: 0};
	},
	tick: function() {
		var alpha;
		var state = this.state;
		if (state.active) {
			alpha = state.alpha*1/3 + 2/3;
			if(state.alpha < 0.95)
				setTimeout(this.tick, 1000/60);
		} else {
			alpha = state.alpha*1/3;
			if(state.alpha > 0.05)
				setTimeout(this.tick, 1000/60);
		}
		this.setState({alpha: alpha});
	},
	handleMouseIn: function() {
		this.setState({active: true});
		setTimeout(this.tick, 1000/60);
	},
	handleMouseOut: function() {
		this.setState({active: false});
		setTimeout(this.tick, 1000/60);
	},
	render: function() {
		var props = this.props;
		var state = this.state;
		var style = {
			textAlign: props.align,
			color: state.active ? props.highlightColor : props.normalColor,
			fontSize: props.size * (1+state.alpha/20)
		};
		return (<div style={style} onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut}>{this.props.content}</div>);
	}
});

module.exports = Text;
