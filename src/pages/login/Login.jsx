import React, { Component } from "react";
import "../login/Login.css";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Login extends Component {
  render() {
    return (
      <div className="Box-class">
        <div className="form-class">
          <div className="fundoo">
            <font color="#0A5BB4"> F </font>
            <font color="#C11D38"> U </font>
            <font color="#EDF750"> N </font>
            <font color="#0A5BB4"> D </font>
            <font color="#71EFA3"> O </font>
            <font color="#8D1F38"> O </font>F
          </div>
          <div className="sign">
            <h2>Sign In</h2>
          </div>
          <div className="account-text">
            <h5>Use Your Account Here</h5>
          </div>
          <div className="email1">
            <TextField
              id="Email"
              label="Email or Phone"
              size="small"
              variant="outlined"
            />
          </div>
          <div className="password">
            <TextField label="Password" size="small" variant="outlined" />
          </div>
          <div className="textletter">Use to Login in privately</div>
          <div className="account">
            <h2 className="accountcolor">
              <a id="GFG" href="Login.css">
                {" "}
                Create New Account
              </a>
            </h2>
            <div className="btm">
              <Button variant="contained">login</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
