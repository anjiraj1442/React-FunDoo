import React, { useState } from "react";
import "./Takenote.scss";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import PushPinIcon from "@mui/icons-material/PushPin";
import Icons from "../icons/Icons";
import { Input } from "@mui/material";

function Takenote() {
  const [takenote, setTakenote] = useState(true);
  const [fieldarea, setField]= useState({
    titile:"",
    description:"",
  })
  const changeFieldarea = (e) => {
    setTakenote(false);
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
        <div className="open-notebar">
          <div className="titlediv">
            <div className="title">
              <TextareaAutosize
                id="titletext"
                rows="1"
                cols="50"
                name="description"
              >
                Title
              </TextareaAutosize>
            </div>
            <div className="titleicon"><PushPinIcon/></div>
          </div>
          <div className="textarea">
            {" "}
            <textarea id="textarea" rows="5" cols="50" name="description">
              Add text
            </textarea>
          </div>
          <div className="open">
            <Icons />
          </div>
          <button onClick={() => setTakenote(true)}>close</button>
        </div>
      )}
    </div>
  );
}

export default Takenote;
