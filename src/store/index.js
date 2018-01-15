import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import api from '../api'
import ls from '../service'
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
            ls.remove("token")
            ls.remove("connected")
        },
        setUser(state, data) {
            state.user = data;
            state.connected = true;
            ls.set("token", state.user.token)   
            ls.set("connected", state.connected)                         
        }
    },
	getters: {
        isConnected(state) {
            return ls.get("connected")
        },
        getConnectedUser(state) {
            return ls.get("token");
        }
    },
	actions: {
        login({commit}, user) {     
            api.post("/members/signin", user).then( (res) => {
                commit('setUser', res.data)
                router.push('/')
            });       
        }, 
        logout({commit}, user) {
            api.delete("/members/signout", {params: {token: ls.get("token")}}).then( (res) => {
                commit("initState", res.data)
                router.push('/login')
            })
        }
    }
})
