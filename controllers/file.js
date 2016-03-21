var util = require("util");

//Do check if relative controllers are init when interactions between controllers are needed.
//var controllers = require("./");

var Action = require("../views/action");
var Controller = require("./controller");

function FileController() {
	Controller.call(this);
	Action.on("File.Open", this.open.bind(this));
}

util.inherits(FileController, Controller);

var p = FileController.prototype;

p.open = function() {

}

module.exports = FileController;
module.exports.instance = new FileController()
