
import axiosInstance from '../../config/http/HttpInterceptor'

import axios from "axios";

const API_URL = "https://api-admin-et.unibiz.io/";

interface Ilogin  {
  access:string,
}

class FarmService {
  async login(username: string, password: string):Promise<Ilogin> {
    return axios
      .post(API_URL + "login/", {
        username,
        password
      })
      .then(response => {
        if (response.data?.data?.access_token) {
          localStorage.setItem("access", JSON.stringify(response.data.data.access_token));
          localStorage.setItem("refress", JSON.stringify(response.data.data.refress_token));
        }
        window.location.assign("/choisefarm");
        return response.data;
      });
  }
}

export default new FarmService();
