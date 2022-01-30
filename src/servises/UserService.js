import AxiosService from "./AxioService";

const axiosService = new AxiosService();
let baseUrl = "http://localhost:4646/";
const header = {
  headers: {
      token: localStorage.getItem("token"),
  },
}
class UserService {
//    Testing(data) {
//         return axiosService.PostService(`${baseUrl}testapi`, data);
//       }
  Registeration(data) {
    return axiosService.PostService(`${baseUrl}register`, data);
  }
  Login(data) {
    return axiosService.PostService(`${baseUrl}login`, data);
  }
  Forget(data) {
    return axiosService.PostService(`${baseUrl}forgotpassword`, data,header);
  }
  Reset(data) {
    return axiosService.PostService(`${baseUrl}resetpassword`, data);
  }
}

export default UserService;
