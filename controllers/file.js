var util = require("util");
var http = require("http");

//Do check if relative controllers are init when interactions between controllers are needed.
//var controllers = require("./");

var Controller = require("./controller");

function FileController() {
	Controller.call(this);
	Actions.on("Submit.OpenFile", this.open.bind(this));
}

util.inherits(FileController, Controller);

var p = FileController.prototype;

p.open = function() {
	var me = this;
	me.view && me.view.active();
	http.get({
		hostname: '10.2.25.0',
		port: 80,
		path: arguments[0],
		agent: false
	}, (res) => {
		res.on('data', (chunk) => {
			me.view && me.view.inactive();
		})
		
	});
//	console.log("TODO ACTION: Submit.OpenFile", arguments);
}

module.exports = FileController;
module.exports.instance = new FileController()
