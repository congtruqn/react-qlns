//import {ROUTE_NAME, routeTo} from './routes'
import axiosInstance from './axiosApi'
//import {objectToFormData, parseResponseData} from '@utils/Utils'

export default {
  login: async (username:string, password:string) => {
    return await axiosInstance
      .post('/login/', {username, password})
      .then((response) => {
        const {access_token, refresh_token} = response.data
        localStorage.setItem('access', access_token)
        localStorage.setItem('refresh', refresh_token)
        console.log('LOGINNNNN');
        return response
      })
      .catch((error) => error)
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    return Promise.resolve()
  },
  // called when the API returns an error
  checkError: (error: { status: any }) => {
    const status = error.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  checkAuth: async () => {
    const accessToken = localStorage.getItem('access')

    if (accessToken) {
      return Promise.resolve()
    }

    return Promise.reject()
  },
  getProfile: () => {
    return axiosInstance
      .get('/')
      .then((response) => {
        return response
      })
      .catch((error) => error)
  },

  // called when the user navigates to a new location, to check for permissions / roles
  getGroups: async () => {
    return await axiosInstance
      .get('/' + 'limit=100')
      .then((response) => {
        return response
      })
      .catch((error) => error)
  },

  changePassword: async (data: any) => {
    return await axiosInstance
      .put('/', data)
      .then((response) => {
        return response
      })
      .catch((error) => error)
  },

  updateProfile: async (data: any) => {
    return await axiosInstance
      .patch("/", data)
      .then((response) => {
        return response
      })
      .catch((error) => error)
  },
}
