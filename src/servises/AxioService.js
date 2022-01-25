import axios from "axios";

class AxiosService {
  PostService(url, data, header = false) {
    return axios.post(url, data, header);
  }
}

export default AxiosService;
