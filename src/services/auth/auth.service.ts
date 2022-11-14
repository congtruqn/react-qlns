
import axiosInstance from '../../config/http/HttpInterceptor'

import axios from "axios";

const API_URL = "https://api-admin-et.unibiz.io/";

class AuthService {
  login(username: string, password: string):any {
    return axios
      .post(API_URL + "login/", {
        username,
        password
      })
      .then(response => {
        if (response.data?.data?.access_token) {
          localStorage.setItem("access", JSON.stringify(response.data.data.access_token));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("access");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("access");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
