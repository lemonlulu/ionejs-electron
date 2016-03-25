var util = require("util");

//Do check if relative controllers are init when interactions between controllers are needed.
//var controllers = require("./");

var Controller = require("./controller");

function FileController() {
	Controller.call(this);
	Actions.on("File.*", this.open.bind(this));
}

util.inherits(FileController, Controller);

var p = FileController.prototype;

p.open = function() {
	console.log("TODO ACTION: File.Open");
}

module.exports = FileController;
module.exports.instance = new FileController()
