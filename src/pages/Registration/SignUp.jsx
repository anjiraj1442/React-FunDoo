import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import "./SignUp.scss";
import logo from "../../images/logo.png";
import axios from "axios";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      firstnameError: "",
      lastnameError: "",
      emailAddress: "",
      emailAddressError: "",
      PassWord: "",
      PassWordError: "",
      confirmPassword:"",
      confirmpasswordError:"",

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
    error.firstnameError = this.state.firstName === "" ? true : false;
    error.lastnameError = this.state.lastName === "" ? true : false;
    error.emailAddressError = this.state.emailAddress === "" ? true : false;
    error.PassWordError = this.state.PassWord === "" ? true : false;
    error.confirmpasswordError = this.state.confirmPassword === "" ? true : false;
    this.setState({
      ...error,
    });
    return (isError =
      error.firstnameError ||
      error.lastnameError ||
      error.emailAddressError ||
      error.PassWordError ||
      error.confirmpasswordError );
  };

  next = () => {

    let data = {
      "firstName":"anji",
      "lastName":"raj",
      "email":"anjirajardula@gmail.com",
      "password":"12345",
      "service":"advance"
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",data)
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
    console.log(this.state);
    return (
      <div className="Signup-container">
        <div className="left-side">
          <h2 className="g1">
            <font color="#0A5BB4"> F </font>
            <font color="#C11D38"> u </font>
            <font color="#EDF750"> n </font>
            <font color="#0A5BB4"> d </font>
            <font color="#71EFA3"> o </font>
            <font color="#8D1F38"> o </font>
          </h2>
          <div className="create">Create Your Fundoo Account</div>

          <div className="form">
            <div className="text-field">
              <div className="fname">
                <TextField
                  name="firstName"
                  id="firstname"
                  label="First Name"
                  type="password"
                  variant="outlined"
                  error={this.state.firstnameError}
                  helperText={
                    this.state.firstnameError ? "First Name required" : " "
                  }
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>
              <div className="lname">
                <TextField
                  name="lastName"
                  id="lastname"
                  label="Last Name"
                  type="password"
                  variant="outlined"
                  error={this.state.lastnameError}
                  helperText={
                    this.state.lastnameError ? "Last Name required" : " "
                  }
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>
            </div>
            <div className="Email">
              <TextField
                name="emailAddress"
                id="email"
                label="Email"
                type="password"
                variant="outlined"
                helperText="You can use letters,numbers and periods"
                fullWidth
                error={this.state.emailAddressError}
                helperText={
                  this.state.emailAddressError ? "Email required" : " "
                }
                onChange={(e) => this.changeHandle(e)}
              />
            </div>
            <div className="use_email">
              <h2>use my current email id instead</h2>
            </div>
            <div className="data">
              <div>
                <TextField
                  name="PassWord"
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  helperText="You can use letters,numbers and periods"
                  error={this.state.PassWordError}
                  helperText={
                    this.state.PassWordError ? "Password required" : " "
                  }
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>
              <div className="cpassword">
                <TextField
                  name="confirPmassword"
                  id="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  error={this.state.confirmpasswordError}
                  helperText={
                    this.state.confirmpasswordError ? " Confirm Password required" : " "
                  }
                  onChange={(e) => this.changeHandle(e)}
                />
              </div>
            </div>
            <div className="text">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
          </div>
          <div className="checkbox">
            <div className="checkbox"></div>
            <input type="checkbox" className="" />
            <div className="show"> Show password </div>
          </div>

          <div className="next">
            <div className="use_email">
              {" "}
              <a id="link" href="">
                {" "}
                Sign in instead{" "}
              </a>
            </div>
            <Button variant="contained" onClick={this.next}>
              Next
            </Button>
          </div>
        </div>

        <div className="right-body">
          <div className="image">
            {" "}
            <img class="logo-image" src={logo} alt="logo" />
            <p>One account. All of Fundoo working for you.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
