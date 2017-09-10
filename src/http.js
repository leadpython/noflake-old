import {store} from './store'
import axios from 'axios'

export default class HTTPService {
  verifyProvider (payload) {
    console.log(payload)
    axios.post('https://noflake-database.herokuapp.com/api/providers/register', {
      email: payload.name,
      handle: payload.nickname,
      providerID: payload.sub.replace('auth0|', '')
    }).then(response => {
      store.commit('setCredentials', payload.sub.replace('auth0|', ''))
      console.log(response)
    })
  }
}
