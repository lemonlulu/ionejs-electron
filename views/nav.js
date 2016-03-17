var React = require("react");
var ReactDOM = require("react-dom");

var Popup = require("./popup");

var layout = [
	{ title: "File", actions: ["Open", "Close"]},
	{ title: "Shape", actions: ["Crop", "Resize"]},
	{ title: "Effect", actions: ["Watermark", "Digimark", "About"]}];

var Nav = React.createClass({
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

		return (
			<div style={{position:"relative"}}>
			{menus}
			</div>
			);
	}
});

module.exports = Nav;
