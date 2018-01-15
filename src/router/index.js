import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

import router from '../router'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    }, 
    {
      path: '/login', 
      name: 'login', 
      component: Login
    }
  ]
})

router.beforeEach( (to, from, next) => {
  console.log(store.getters['isConnected'])
  if(to.name != 'login' && !store.getters['isConnected']) 
  {
    next({name: 'login', query: {redirect: to.fullPath}})
  } 
  else if (to.name == "login" && store.getters['isConnected'])
  {
    next({name: 'home'})
  } 
  else 
  {
    next()
  }  
})
