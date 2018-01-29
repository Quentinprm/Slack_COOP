import api from '@/api'
import ls from '@/services/ls'

export default {
    namespaced: true,
    state: {},
    getters: {}, 
    mutations: {}, 
    actions: {
        createChan ({commit}, chanData) {
            let params = {
                token: ls.get('token'),
                label: chanData.label,
                topic: chanData.topic
            }

            return api.post('/channels', params).then(response => {
            
			}).catch(error => {
				console.log(error)
			})
        }
    }
}