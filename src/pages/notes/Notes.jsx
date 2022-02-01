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

        setNotearr(res.data.data);
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
      <Displaynote noteArr={noteArr} getNote={getNotes}/>
    </div>
  );
}
