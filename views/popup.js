var React = require("react");

var Popup = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			title: "popup list"
		};
	},
	getInitialState: function() {
		return { active: false, stretch: 0 };
	},
	handleClick: function(event) {
		this.setState({ active: !this.state.active});
		setTimeout(this.tick, 1000/60);
	},
	tick: function() {
		var stretch;
		var state = this.state;
		if (state.active) {
			stretch = state.stretch/3 + 2/3;
			if(state.stretch < 0.95)
				setTimeout(this.tick, 1000/60);
		} else {
			stretch = state.stretch*2/3;
			if(state.stretch > 0.05)
				setTimeout(this.tick, 1000/60);
		}
		this.setState({stretch: stretch});
	},
	shouldComponentUpdate() {
		return true;
	},
	render: function() {
		var list;
		var props = this.props, state = this.state;
		if (state.active)
		list = props.actions.map(function(a, i){
			var style = {
				position: "absolute",
				left: 0,
				top: i * 20 * state.stretch + 20
			};
			return (<div key={a} style={style}>{a}</div>);
		});
		return (<div style={{position:"relative"}} onClick={this.handleClick}>
			{props.title}
			{list}
			</div>);
	}
});

module.exports = Popup;
