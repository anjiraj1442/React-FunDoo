import React from "react";
import { useState } from "react";
import Displaynote from "../../components/displaynote/Displaynote";
import Takenote from "../../components/takenote/Takenote";
import NoteService from "../../servises/NoteService";
const NotesObject = new NoteService();
export default function Notes() {
  const [noteArr, setNotearr] = useState([]);
  // console.log(noteArr);
  React.useEffect(() => {
    //whn we refresh grab the values
    //  console.log("hi");
    getNotes();
  }, []);

  const getNotes = () => {
    NotesObject.getnotes()
      .then((res) => {
        console.log(res);
 //filter condirtion and is archiove not equal in varaia ble in set note array
 let filterData= res.data.data.filter(data=>data.isArchieved!==true && data.isDeleted!==true)
 setNotearr(filterData)
        // console.log(noteArr);
        // console.log(res.data.data, "check");
        // console.log("succes");
      })
      .catch((err) => {
        console.log("not getting", err);
      });
  };

  return (
    <div>
      <Takenote getNotes={getNotes} />
      <Displaynote className='Notes-container' noteArr={noteArr} mode='notes'  getNote={getNotes} />
    </div>
  );
}
