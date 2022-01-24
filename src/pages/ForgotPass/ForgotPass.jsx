import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./ForgotPass.css";
import Button from "@mui/material/Button";
import axios from "axios";
export class ForgotPass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailaddress: "",
      emailaddressError:"",
    };
  }
  changeHandle = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validation = () => {
    let isError = false;
    const error = this.state;
    error.emailaddressError = this.state.emailaddress === "" ? true : false;
    this.setState({
      ...error,
    });
    return (isError = error.emailaddressError);
  };
  next = () => {
    let data = {
        
      "email":"anjirajardula@gmail.com",
      
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset",data)
    .then((res)=>{
      console.log(res);
    })
    .catch(()=>{

    })
    var validated = this.validation();
    if (validated) {
      console.log("Validation Completed");
    } else {
      console.log("somethingmissing");
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
        <h3>Find your email</h3>
        <div className="recover">Enter your number or Recover your email</div>
        <div className="email">
          <TextField
            name="emailaddress"
            id="password-input"
            type="text"
            label="email or phone"
            variant="outlined"
            size="small"
            autoFocus="true"
            error={this.state.emailaddressError}
            helperText={this.state.emailaddressError ? "First Name required" : " "}
            onChange={(e) => this.changeHandle(e)}
          />
        </div>
        <div className="next-button">
          <Button variant="contained" size="small" onClick={this.next}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default ForgotPass;
