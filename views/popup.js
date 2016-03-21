var React = require("react");
var _ = require("underscore");

var Text =require("./text");
var Action = require("./action");

var Popup = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},
	getInitialState: function() {
		return { active: false, alpha: 0,
			background: { backgroundColor: '#fff'}};
	},
	handleClick: function(event) {
		event.popuplist = this;
	},
	setActive: function(active) {
		this.setState({ active: active});
		setTimeout(this.tick, 1000/60);
	},
	tick: function() {
		var alpha;
		var state = this.state;
		if (state.active) {
			alpha = state.alpha*3/4 + 1/4;
			if(state.alpha < 0.95)
				setTimeout(this.tick, 1000/60);
		} else {
			alpha = state.alpha*3/4;
			if(state.alpha > 0.05)
				setTimeout(this.tick, 1000/60);
		}
		this.setState({alpha: alpha});
	},
	render: function() {
		var list;
		var props = this.props, state = this.state;
		list = props.actions.map(function(a, i){
			var style = { top: i * 30 * state.alpha + 30, opacity: state.alpha, display:state.alpha > 0.1 ? "block": "none"};
			style = _.defaults( style, {position: "absolute",left: 0});
			var type = props.title+"."+a;
			return (<div key={a} style={style}>
				<Action type = {type}>
				<Text content={a} align="center" ></Text>
				</Action>
				</div>);
		});
		var style = _.defaults( state.background, 
			{marginTop:'10', position:"absolute", fontSize:'20px', cursor:'pointer'});
		return (<div style={style} onClickCapture={this.handleClick}>
				<Text content={props.title} align="center" ></Text>
				{list}
			</div>);
	}
});

module.exports = Popup;
