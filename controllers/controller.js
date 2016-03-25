var EventEmitter = require("events");
var util = require("util");

function Controller() {
	this.view = null;
	EventEmitter.call(this);
}
util.inherits(Controller, EventEmitter);

var p = Controller.prototype;

p.bind = function(view) {
	this.view = view;
};

module.exports = Controller;
