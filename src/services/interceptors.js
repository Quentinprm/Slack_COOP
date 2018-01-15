import Vue from 'vue'
import api from '@/api'
import ls from '@/service/ls'
import store from '@store'
export default {
  install:(Vue,options ={}) => {
     api.interceptors.request.use(function(config){
      if(ls.ge('token')){
        if(!config.params){
          config.params={}
        }
         config.params.token=ls.get('token')
      }
       return config
     },function(error){
       return Promise.reject(error)
     })

     api.interceptors.response.use(function(response){
       return response
     },function(error){
        if(error.response.status == 401){
          store.dispatch('auth/logout',error.response.data.error.indexOf("wrong token")).then((d)=>{
            VUe.$router.push({name: 'signin'})
          })
        }
        return Promise.reject(error)
     })
  }
}
