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
	},
	mixins: [Gradual(3/4, 60, {})],
	render: function() {
		var state = this.state;
		var style = _.defaults({opacity: state.alpha, display:state.alpha > 0.1 ? "block": "none"}, this.props);
		return (<div style={style}>
				<input type="text"></input>
				<Action type="Submit.OpenFile">
				<Text content="Confirm"></Text>
				</Action>
			</div>);
	}
});

module.exports = OpenFile;
