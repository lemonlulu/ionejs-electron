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
		return { active: false };
	},
	handleClick: function(event) {
		this.setState({ active: !this.state.active });
	},
	shouldComponentUpdate() {
		return true;
	},
	render: function() {
		var list;
		if (this.state.active)
		list = this.props.actions.map(function(a, i){
			var style = {
				position: "absolute",
				left: 0,
				top: i*12 + 20
			};
			return (<div key={a} style={style}>{a}</div>);
		});
		return (<div style={{position:"relative"}} onClick={this.handleClick}>
			{this.props.title}
			{list}
			</div>);
	}
});

module.exports = Popup;
