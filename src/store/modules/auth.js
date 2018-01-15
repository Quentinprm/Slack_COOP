import api from '@api'
import  ls from '../../service'
export default {
  state{
    user:{},
    connected:false
  },
  getters: {
    isConnected(state){
      return state.connected
    },
    getConnectedUser(state){
      return state.user
    }
  },
  mutations:{
    setConnectedUser(state,u){
      state.user=u
      state.connected=true
      ls.set('token',state.user.token)
      ls.set('connected',state.connected)
    },
    initState(state){
      ls.remove('token')
      ls.remove('connected')
      state.user={}
    },
  },
  actions{
    login({commit},credentials){
        return api.post('/members/signin',credentials).then(response=>{
          commit("setConnectedUser",response.data)
        }).catch(error=>{
          console.log("store >auth>login ->error")
        })
    }

    logout({commit},forceDeco){
      return new Promise ((success,reject)=>{
        if(forceDeco){
          return api.delete('/members/signout').then(response =>{
            commit("initState")
            success()
          }).catch(error=>{
            console.log("store >auth>logout ->error")
          })
        }else{
          setTimeout(()=>{
            commit("initState")
            success({data: "data"})
          },0)

        }
      })

    }

  }

}
