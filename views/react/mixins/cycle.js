var _ = require("underscore");

var Cycle = function(rate, fps, state) {
	return {
		getInitialState() {
			return _.defaults(state, { active: false, alpha: 0});
		},
		setActive: function(active) {
			this.setState({active: active});
			setTimeout(this.tick, 1000/60);
		},
		tick: function() {	
			var me = this;
			var alpha;
			var state = this.state;
			if (state.active) {
				alpha = state.alpha*(1-rate) + rate;
				if(state.alpha > 0.95) {
					alpha = 0;
				}
				setTimeout(me.tick, 1000/fps);
				me.setState({alpha: alpha});
			}				
		}
	}
}

module.exports = Cycle;
