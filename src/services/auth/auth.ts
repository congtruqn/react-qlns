
import {httpRequest} from '../http/HttpRequest'
export default {
    login: async (username:string, password:string) => {
      return await httpRequest
        .post({username, password})
        .then((response) => {
          const {access_token, refresh_token} = response.data
          localStorage.setItem('access', access_token)
          localStorage.setItem('refresh', refresh_token)
          console.log('LOGINNNNN');
          return response
        })
        .catch((error) => error)
    }
}