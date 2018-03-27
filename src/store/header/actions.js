import * as types from './mutation_types'

export default {
	toggle_show_header : ({commit}) => {
		commit(types.TOGGLE_SHOW_HEADER)
	},
	toggle_hide_header : ({commit}) => {
		commit(types.TOGGLE_HIDE_HEADER)
	}
}