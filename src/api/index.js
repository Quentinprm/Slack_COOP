import axios from 'axios'

const api=axios.create({
  baseURL: conf.remoteUrl,
  headers:{
    'Authorization': 'Token token='+conf.apiKey
  }
})
