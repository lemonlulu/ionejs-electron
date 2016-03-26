var _ = require("underscore");

var Gradual = function(rate, fps, state) {
	return {
		getInitialState() {
			return _.defaults(state, { active: false, alpha: 0});
		},
		setActive: function(active) {
			this.setState({ active: active});
			setTimeout(this.tick, 1000/60);
		},
		tick: function() {
			var alpha;
			var state = this.state;
			if (state.active) {
				alpha = state.alpha*rate + 1 - rate;
				if(state.alpha < 0.95)
					setTimeout(this.tick, 1000/fps);
			} else {
				alpha = state.alpha*rate;
				if(state.alpha > 0.05)
					setTimeout(this.tick, 1000/fps);
			}
			this.setState({alpha: alpha});
		}
	}
}

module.exports = Gradual;
