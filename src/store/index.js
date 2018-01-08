import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: ''
	},
	mutations: {
        setToken(state, token) {
            state.token = token 
            console.log("Token set!")
        }
    },
	getters: {},
	actions: {
        login({commit}, token) {            
            commit('setToken', token)
            router.push('/')
        }
    }
})
