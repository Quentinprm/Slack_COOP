import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import api from '../api'

// regarder vuex-persistedstate

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        user: {},
        connected: false
	},
	mutations: {
        initState() {
            state.user = {};
            connected = false;
        },
        setUser(state, data) {
            state.user = data;
            state.connected = true;
        }
    },
	getters: {},
	actions: {
        login({commit}, user) {     
            api.post("/members/signin", user).then( (res) => {
                commit('setUser', res.data)
                router.push('/')
            });       
        }, 
        logout({commit}) {
            // api.delete
                // commit("initState")
        }
    }
})
