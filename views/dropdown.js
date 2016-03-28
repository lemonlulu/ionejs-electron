var React = require("react");
var _ = require("underscore");

var Text =require("./text");
var Action = require("./action");

var Gradual = require("./mixins/gradual");

var Dropdown = React.createClass({
	mixins: [Gradual(3/4, 60, {background: { backgroundColor: '#fff'}})],
	propTypes: {
		title: React.PropTypes.string
	},
	handleClick: function(event) {
		event.dropdownlist = this;
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
				<Text content={a} ></Text>
				</Action>
				</div>);
		});
		var style = _.defaults( state.background, 
			{marginTop:'10', position:"absolute", fontSize:'20px', cursor:'pointer'});
		return (<div style={style} onClickCapture={this.handleClick}>
				<Text content={props.title} ></Text>
				{list}
			</div>);
	}
});

module.exports = Dropdown;
