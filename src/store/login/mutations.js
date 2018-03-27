import * as types from './mutation_types'

export default {
	[types.LOGIN_IN](state){
		state.loginState = 1;
	},
	[types.LOGIN_OUT](state){
		state.loginState = 0;
	}
}