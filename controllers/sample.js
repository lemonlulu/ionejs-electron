//This controller doesn't function in the application but works as an example to tell 
//you how to write a controller interacting with models and views;

//A controller listen to Action Event emitted by the view to cognize user intentions.
//So, here you require ../view/action.
var Action = require("../views/action");

//A controller share similar behaviors implemented in controllers/controller.js.
//So, here you require controller
var Controller = require("./controller");

//To inherits base controller, here required util.
var util = require("util");

function SampleController() {
	//To apply inherits in js
	Controller.call(this);
	//Listen to the Action Event
	//In js, most callback binds context.
	Action.on("Your Action Event", this.yourMethod.bind(this));
}

//To apply inherits in js
util.inherits(SampleController, Controller);

//In js, methods are implement in Object.prototype.
var p = SampleController.prototype;

//So, finally here, when the user does something and subsequently emit related Action
//Event, your method here runs with event params.
p.yourMethod = function() {
	//Print something
	console.log("Sample Controller receives the Action Event.");
}

//Exports your code so that others can require.
//Also, don't forget to register your controller in index.js for initialization.
module.exports = SampleController;
module.exports.instance = new SampleController()
