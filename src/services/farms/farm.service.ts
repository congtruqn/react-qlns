
import axiosInstance from '../../config/http/HttpInterceptor'

import axios from "axios";

const API_URL = "https://api-qlns.unibiz.io/farm-service/farms";

class FarmService {
  async listFarms():Promise<any> {
    return await axios
      .get(API_URL)
      .then(response => {
        return response.data.data;
      });
  }
}
export default new FarmService();
