import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 5000,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
    params: {}
})

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const addToken = (token: string) => {
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const removeToken = () => {
    delete axiosInstance.defaults.headers.common.authorization;
}
export default axiosInstance;