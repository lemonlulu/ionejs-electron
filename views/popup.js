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
	render: function() {
		var list = null;
		if (this.state.active)
		list = this.props.actions.map(function(a){
			return (<div key={a}>{a}</div>);
		});
		return (<div onClick={this.handleClick}>
			{this.props.title}
			{list}
			</div>);
	}
});

module.exports = Popup;
