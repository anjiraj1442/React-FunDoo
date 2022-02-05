import AxiosService from "./AxioService";

const axiosService = new AxiosService();
let baseUrl = "http://localhost:4646";
const headerconfig = {
  headers: {
    token: localStorage.getItem("token"),
  },
};
class NoteService {
  addnotes(data) {
    return axiosService.PostService(
      `${baseUrl}/notes/addnotes`,
      data,
      headerconfig
    );
  }
  getnotes() {
    return axiosService.getNoteServive(
      `${baseUrl}/notes/getnotes`,
      headerconfig
    );
  }
  updatenotes(data) {
    return axiosService.updateService(
      `${baseUrl}/notes/updatenotes`,
      data,
      headerconfig
    );
  }
  getisArchieved() {
    console.log("first");
    return axiosService.getNoteServive(
      `${baseUrl}/notisArchievedes`,
      headerconfig
    ); //?spelling
  }
  getisDeleted() {
    return axiosService.getNoteServive(
      `${baseUrl}/notes/isDeleted`,
      headerconfig
    );
  }
}
export default NoteService;
