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
 const Notes = new NoteService()
function Takenote(props) {
  const [takenote, setTakenote] = useState(true);
  const [field, setField] = useState({
    title: '',
    description: '',
    isArchieved: '',
    isDeleted: '',
    color: ''
})
const changeField = (e) => {
  setField((previousstate) => {
      return { ...previousstate, [e.target.name]: e.target.value }
  })
}
  const close = ()=>{
    let data = {
      "title":field.title,
      "desriprtion":field.description,
      "isArchieved": false,
      "isDeleted":false,
      "color": field.color,
    }
    setTakenote(true)
    Notes.addnotes(data).then((res)=>{
        props.getNotes()
    //  console.log(res,"succesfully added")
    }).catch((err) => {
      console.log(err,"error");

  })
  }
  return (
    <div>
      {takenote ? 
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
       : 
       <div className='bar-input' >
                <div> <TextareaAutosize name="title" className='text-area' placeholder="Title" rows="1" cols="50" onChange={(e) => changeField(e)} >
                    
                </TextareaAutosize></div>
                <div> <textarea name="description" className='text-area'placeholder="Add text" rows="5" cols="50" onChange={(e) => changeField(e)} >
                    
                </textarea></div>
                <div className='close-button'>
                    <Icons className='icons-set' />
                    <button className='button-icon' onClick={() => close()}>close</button>
                </div>

            </div>
      }
    </div>
  );
}

export default Takenote;