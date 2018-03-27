import * as types from './mutation_types'

export default {
	login_in : ({commit}) => {
		commit(types.LOGIN_IN)
	},
	login_out : ({commit}) => {
		commit(types.LOGIN_OUT)
	}
}