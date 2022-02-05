import React, { useState } from "react";
import { useEffect } from "react";
import Displaynote from "../../components/displaynote/Displaynote";
import NoteService from "../../servises/NoteService";
const noteservice = new NoteService();

function Deleted() {
  const [notearr, setNotearr] = useState([]);
  useEffect(() => {
    getisDeletedNote();
  }, []);
  const getisDeletedNote = () => {
    noteservice
      .getisDeleted()
      .then((result) => {
        // let filterdData= result.data.data.filter(data=>data.isArchieved!==true && data.isDeleted==true)
        setNotearr(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="Notes-container">
        <Displaynote
          mode="delete"
          noteArr={notearr}
          getnote={getisDeletedNote}
        />
      </div>
    </div>
  );
}

export default Deleted;
