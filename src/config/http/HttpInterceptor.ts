import axios from 'axios';
import { AUTH_API } from "../index"
const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
    async config => {
      const access_token = localStorage.getItem("access")
      config.headers = { 
        'Authorization': `Bearer ${access_token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      return config;
    },
    error => {
      Promise.reject(error)
});
axiosInstance.interceptors.response.use((response:any) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();            
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
})

export const refreshAccessToken = async () => {
    const refreshToken = window.localStorage.getItem('refresh')
    return await axiosInstance.post(AUTH_API+`/oauth/api-token-refresh`,{refresh: refreshToken});
}
export default axiosInstance;