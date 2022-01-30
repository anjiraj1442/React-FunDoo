import AxiosService from "./AxioService";

const axiosService = new AxiosService();
let baseUrl = "http://localhost:4646";
const headerconfig = {
     headers: {
          token: localStorage.getItem("token"),
     },
 }
class NoteService{
     addnotes(data){
          return axiosService.PostService(`${baseUrl}/notes/addnotes`,data,headerconfig)
     }
     getnotes(){
          return axiosService.getNoteServive(`${baseUrl}/notes/getnotes`,headerconfig)
     }

}
export default NoteService