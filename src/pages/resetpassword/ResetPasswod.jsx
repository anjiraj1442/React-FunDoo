import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./ResetPassword.css";
import Button from "@mui/material/Button";
import axios from "axios";
import UserService from "../../servises/UserService";
import { Link } from "react-router-dom";
const userService = new UserService();
export class Reserpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Newpassword: "",
      NewpasswordError: "",
      ConfirmPassWord:"",
      ConfirmPassWordError:"",
    };
  }
  changeHandle = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,//grab the things dynamically
    });
  };
  validation = () => {
    let isError = false;
    const error = this.state;
    error.NewpasswordError = this.state.Newpassword === "" ? true : false;
    error.ConfirmPassWordError = this.state.ConfirmPassWord === "" ? true : false;
    this.setState({
      ...error,
    });
    return (isError = error.NewpasswordError || error.ConfirmPassWordError);
  };
  next = () => {
    let data = {
       
      "password":this.state.Newpassword
      
    }
    userService
      .Reset(data)
    .then((res)=>{
      console.log(res);
    })
    .catch(()=>{

    })
    var validated = this.validation();
    if (validated) {
      console.log("Validation Completed");
    } else {
      console.log("something missing");
    }
  };

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
        <h3>Change Password</h3>
        <div className="recover">
          Create a new Strong password that you dont use for other websites
        </div>
        <div className="NewPassWord">
          <TextField
            name="Newpassword"
            id="password-input"
            type="text"
            label="New Password"
            variant="outlined"
            size="small"
            autoFocus="true"
            error={this.state.NewpasswordError}
            helperText={
              this.state.NewpasswordError ? "First Name required" : " "
            }
            onChange={(e) => this.changeHandle(e)}
          />
        </div>
        <div className="connfirmpassword">
          <TextField
            name="ConfirmPassWord"
            id="password-input"
            type="text"
            label="ConfirmPassword"
            variant="outlined"
            size="small"
            error={this.state.ConfirmPassWordError}
            helperText={
              this.state.ConfirmPassWordError ? "First Name required" : " "
            }
            onChange={(e) => this.changeHandle(e)}
          />
        </div>

        <div className="skiptype">
          <a href="" className="skip">
            <h4>Skip</h4>
          </a>
        </div>

        <div className="next-button">
          <Button variant="contained" size="small" onClick={this.next}>
            SAVE PASSWORD
          </Button>
        </div>
      </div>
    );
  }
}

export default Reserpassword;
