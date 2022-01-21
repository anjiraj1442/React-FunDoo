import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./ForgotPass.css";
import Button from '@mui/material/Button';
export class ForgotPass extends Component {
  render() {
    return (
      <div className="ForgotPass">
        <div className="Fundoo">
                        <font color="#0A5BB4"> F </font>
                        <font color="#C11D38"> U </font>
                        <font color="#EDF750"> N </font>
                        <font color="#0A5BB4"> D </font>
                        <font color="#71EFA3"> O </font>
                        <font color="#8D1F38"> O </font> 
                        </div>
        <h3>Find your email</h3>
      <div className='recover'>Enter your number or Recover your  email</div>
      <div className="email"><TextField id="password-input"
        type='text'
        label='email or phone'
        variant="outlined"
        size='small'
        autoFocus='true'
         />
      </div>
      <div className='next-button'><Button variant="contained" size='small'>Next</Button></div>
    </div>
    );
  }
}

export default ForgotPass;
