import React, { Component } from "react";
import "../login/Login.css";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";

export class Login extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="Box-class">
        <div className="form-class">
          <div className="fundoo">
=======
  constructor(props) {
      super(props);
      this.state = {
        emailaddress: "",
        emailaddressError:"",
        passWord:"",
        passwordError:""
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
      error.passwordError = this.state.passWord === "" ? true : false;
      this.setState({
        ...error,
      });
      return (isError = error.emailaddressError || error.passwordError);
    };
    next = () => {
      var validated = this.validation();
      if (validated) {
        console.log("Validation Completed");
      } else {
        console.log("somethingmissing");
      }
    };
  render() {
    return (
      <div className="login-main-page">
        <div className="first-content">
          <div className="Fundoo">
>>>>>>> resetpassword
            <font color="#0A5BB4"> F </font>
            <font color="#C11D38"> U </font>
            <font color="#EDF750"> N </font>
            <font color="#0A5BB4"> D </font>
            <font color="#71EFA3"> O </font>
<<<<<<< HEAD
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
=======
            <font color="#8D1F38"> O </font>
          </div>
          <h2>Sign in</h2>
          <p className="account">Use your Fundoo Account</p>
        </div>
        <div className="second-content">
          <div className="email">
            <TextField
              name="emailaddress"
              id="Email"
              label="Email or phone"
              variant="outlined"
              helperText="Forgot Email?"
              size="small"
              fullWidth
              error={this.state.emailaddressError}
              helperText={
                this.state.emailaddressError ? "email or phone required" : " "
              }
              onChange={(e) => this.changeHandle(e)}
            />
          </div>

          <div className="password">
            <TextField
            name="passWord"
              id="Password"
              label="Password"
              variant="outlined"
              helperText="Forgot Password"
              size="small"
              fullWidth
              error={this.state.passwordError}
              helperText={
                this.state.passwordError ? "password required" : " "
              }
              onChange={(e) => this.changeHandle(e)}
            />
          </div>
        </div>
        <div className="third-content">
          <h5 className="not">
            Not your computer? Use Guest mode to sign in privately.
          </h5>
          <a href=""  id="more"  className="learn">Learn more</a>
        </div>
        <div className="fourth-content">
          <a href="" className="learn">Create account</a>
          <div>
            {" "}
            <button id="next" onClick={this.next}>Next</button>
>>>>>>> resetpassword
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
