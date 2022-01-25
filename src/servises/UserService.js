import AxiosService from "./AxioService";

const axiosService = new AxiosService();
let baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";
class UserService {
  Registeration(data) {
    return axiosService.PostService(`${baseUrl}user/userSignUp`, data);
  }
  Login(data) {
    return axiosService.PostService(`${baseUrl}user/login`, data);
  }
  Forget(data) {
    return axiosService.PostService(`${baseUrl}user/reset`, data);
  }
  Reset(data) {
    return axiosService.PostService(`${baseUrl}user/reset-password`, data);
  }
}

export default UserService;
