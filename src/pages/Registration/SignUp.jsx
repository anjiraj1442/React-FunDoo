import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import "./SignUp.css";
import logo from "../../images/logo.png";

export class SignUp extends Component {
  render() {
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
                  id="firstname"
                  label="First Name"
                  type="password"
                  variant="outlined"
                />
              </div>
              <div className="lname">
                <TextField
                  id="lastname"
                  label="Last Name"
                  type="password"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="Email">
              <TextField
                id="email"
                label="Email"
                type="password"
                variant="outlined"
                helperText="You can use letters,numbers and periods"
                fullWidth
              />
            </div>
            <div className="use_email">
              <h2>use my current email id instead</h2>
            </div>
            <div className="data">
              <div>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  //helperText="You can use letters,numbers and periods"
                />
              </div>
              <div className="cpassword">
                <TextField
                  id="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
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
            <Button variant="contained">Next</Button>
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
