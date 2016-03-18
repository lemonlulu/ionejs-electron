var React = require("react");
var ReactDOM = require("react-dom");

var Popup = require("./popup");
var _ = require("underscore");

var layout = [
	{ title: "File", actions: ["Open", "Close"]},
	{ title: "Shape", actions: ["Crop", "Resize"]},
	{ title: "Effect", actions: ["Watermark", "Digimark", "About"]}];

var Nav = React.createClass({
	getInitialState: function() {
		return {currentActivePopuplist: null};
	},
	handleClick: function(event) {
		var current = this.state.currentActivePopuplist;
		var next = event.popuplist;
		current && current.setActive(false);
		next && next.setActive(true);
		this.setState({currentActivePopuplist: next});
		event.stopPropagation();
	},
    	handleClose: function(event) {
		var current = this.state.currentActivePopuplist;
		current && current.setActive(false);
		this.setState({currentActivePopuplist: null});
	},
	render: function() {
		var menus = layout.map(function(p, i) {
			var popuplist = (<Popup title={p.title} actions={p.actions}></Popup>);
			var style = { left: i * 80 + 100};
			style = _.defaults( style, {'position': 'absolute'});
			return (
				<div style={style}  key={p.title}>
				{popuplist}
				</div>
				);
		});

		if (!this.state.currentActivePopuplist) 
			return (
				<div>
				<div style={{position:"relative"}} onClick={this.handleClick}>
				{menus}
				</div>
				</div>
				);
		else 
			return (
				<div style={{position:"fixed", width:"100%", height:"100%"}} onClick={this.handleClose}>
				<div style={{position:"relative"}} onClick={this.handleClick}>
				{menus}
				</div>
				</div>
				);
	}
});

module.exports = Nav;
