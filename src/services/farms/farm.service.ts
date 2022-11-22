
import axiosInstance from '../../config/http/HttpInterceptor'
const API_URL = "https://api-qlns.unibiz.io/farm-service/farms";

class FarmService {
  async listFarms():Promise<any> {
    return await axiosInstance
      .get(API_URL)
      .then(response => {
        return response.data.data;
      });
  }
}
export default new FarmService();
