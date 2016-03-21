var EventEmitter = require("events");
var util = require("util");

function Controller() {
	EventEmitter.call(this);
}
util.inherits(Controller, EventEmitter);

module.exports = Controller;
