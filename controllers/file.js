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
	var option = {
		hostname: '10.2.25.0',
		port: 80, 
		path: arguments[0],
		agent: false
	};
	var request = http.request(option, (res) => {
		res.on('data', (chunk) => {
			me.view && me.view.inactive();
		});
	});
	request.on('error', (err) => {
		console.log("request file error ", err);
		me.view && me.view.inactive();
	});
	request.end();
}

module.exports = FileController;
module.exports.instance = new FileController()
