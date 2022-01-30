import axios from "axios";

class AxiosService {
  PostService(url, data, header = false) {
    return axios.post(url, data, header);
  }
  getServive(url, data , header=false){
    return axios.get(url,data,header);
  }
  getNoteServive(url,header=false){
    return axios.get(url,header);
  }
}

export default AxiosService;
