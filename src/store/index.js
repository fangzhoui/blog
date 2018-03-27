import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import header from './header'
import login from './login'

export default new Vuex.Store({
	modules: {
		header,
		login
	}
})
