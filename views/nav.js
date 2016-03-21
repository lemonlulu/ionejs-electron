var React = require("react");
var ReactDOM = require("react-dom");

var Dropdown = require("./dropdown");
var _ = require("underscore");

var layout = [
	{ title: "File", actions: ["Open", "Close"]},
	{ title: "Shape", actions: ["Crop", "Resize"]},
	{ title: "Color", actions: ["Red", "Green", "Blue"]},
	{ title: "Effect", actions: ["Watermark", "Digimark", "About"]}];

var Nav = React.createClass({
	getInitialState: function() {
		return {currentActiveDropdownlist: null};
	},
	handleClick: function(event) {
		var current = this.state.currentActiveDropdownlist;
		var next = event.dropdownlist;
		if (next != current) {
			current && current.setActive(false);
			next && next.setActive(true);
			this.setState({currentActiveDropdownlist: next});
			event.stopPropagation();
		}
	},
    	handleClose: function(event) {
		var current = this.state.currentActiveDropdownlist;
		current && current.setActive(false);
		this.setState({currentActiveDropdownlist: null});
	},
	render: function() {
		var menus = layout.map(function(p, i) {
			var dropdownlist = (<Dropdown title={p.title} actions={p.actions}></Dropdown>);
			var style = { left: i * 80 };
			style = _.defaults( style, {'position': 'absolute'});
			return (
				<div style={style}  key={p.title}>
				{dropdownlist}
				</div>
				);
		});

		var _nav = (
				<div style={{position:"absolute", left: this.props.left, top: this.props.top}} onClick={this.handleClick}>
				{menus}
				</div>
				);

		if (!this.state.currentActiveDropdownlist) 
			return (
				<div>
				{_nav}
				</div>
				);
		else 
			return (
				<div style={{position:"fixed", width:"100%", height:"100%"}} onClick={this.handleClose}>
				{_nav}
				</div>
				);
	}
});

module.exports = Nav;
