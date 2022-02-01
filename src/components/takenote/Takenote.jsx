import React, { useState } from "react";
import "./Takenote.scss";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import PushPinIcon from "@mui/icons-material/PushPin";
import Icons from "../icons/Icons";
import { Input } from "@mui/material";
import NoteService from "../../servises/NoteService";
const Notes = new NoteService();
function Takenote(props) {
  const [takenote, setTakenote] = useState(true);

  const [field, setField] = useState({
    title: "",
    description: "",
   
  });
  const [changecolor, setChangecolor] = useState("");
  const backgroundcolor = (data) => {
    setChangecolor(data);
  };
  const changeField = (e) => {
    setField((previousstate) => {
      return { ...previousstate, [e.target.name]: e.target.value };
    });
  };
  const [archieve, setArchieve] = useState(false);
  const archieveChange = () => {
    setArchieve(true);
  };

  const close = () => {
    let data = {
      title: field.title,
      description: field.description,
      isArchieved: archieve,
      isDeleted: false,
      color: changecolor,
    };
    setTakenote(true);
    Notes.addnotes(data)
      .then((res) => {
        props.getNotes();
        setField({
          title: "",
          description: "",
        });
        //  console.log(res,"succesfully added")
      })
      .catch((err) => {
        console.log(err, "error");
      });
    setChangecolor("#FFFFFF");
  };
  return (
    <div>
      {takenote ? (
        <div className="takenote-bar" onClick={() => setTakenote(false)}>
          <div className="takenote">Take a note...</div>
          <div className="bar-icons">
            <div>
              <CheckBoxOutlinedIcon htmlColor="grey" />
            </div>
            <div>
              <BrushOutlinedIcon htmlColor="grey" />
            </div>
            <div>
              <InsertPhotoOutlinedIcon htmlColor="grey" />
            </div>
          </div>
        </div>
      ) : (
        <div className="bar-input" style={{ backgroundColor: changecolor }}>
          <div>
            {" "}
            <TextareaAutosize
              name="title"
              className="text-area"
              placeholder="Title"
              rows="1"
              cols="50"
              onChange={(e) => changeField(e)}
            ></TextareaAutosize>
          </div>
          <div>
            {" "}
            <textarea
              name="description"
              className="text-area"
              placeholder="Add text"
              rows="5"
              cols="50"
              onChange={(e) => changeField(e)}
            ></textarea>
          </div>
          <div className="close-button">
            <Icons
              className="icons-set"
              mode="takenote"
              archieveChange={() => archieveChange()}
              modeone={(data) => backgroundcolor(data)}
            />
            <button
              className="button-icon"
              style={{ backgroundColor: changecolor }}
              onClick={() => close()}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Takenote;
