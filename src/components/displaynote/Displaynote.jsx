import React, { useState } from "react";
import Icons from "../icons/Icons";
import "./Displaynote.scss";

function Displaynote(props) {
  if (props.noteArr) {
    console.log(props.noteArr,"propsarr")
    {
       return <div className="main-display">
      {props.noteArr.map((notes, index) => (
       
          <div className="container">
            <div className="title">{notes.title}</div>
            <div className="notes">{notes.description}</div>
            <div className="icons">
              <Icons />
            </div>
          </div>
        
      ))}</div>;
    }
  }
}

export default Displaynote;
