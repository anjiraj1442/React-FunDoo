import React, { useState } from "react";

import Displaynote from "../../components/displaynote/Displaynote";
import NoteService from "../../servises/NoteService";
const noteservice = new NoteService();

function Archive() {
  const [notearr, setNotearr] = useState([]);
  React.useEffect(() => {
    getArchiveNotes();
  }, []);

  const getArchiveNotes = () => {
    noteservice
      .getisArchieved()
      .then((result) => {
        console.log(result);
        // let filterData= result.data.data.filter(data=>data.isArchieved==true && data.isDeleted!==true)
        setNotearr(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="Notecontainer">
        <Displaynote
          mode="archieve"
          noteArr={notearr}
          getnote={getArchiveNotes}
        />
      </div>
    </div>
  );
}

export default Archive;
