import * as types from './mutation_types'

export default {
	[types.TOGGLE_SHOW_HEADER](state){
		state.showHeader = true;
	},
	[types.TOGGLE_HIDE_HEADER](state){
		state.showHeader = false;
	}
}