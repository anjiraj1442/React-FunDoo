import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { FormHelperText } from "@mui/material";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../images/logo.png";
import "./Reg.css";

export class Reg extends Component {
  render() {
    return (
      <form class="login-form">
        <div class="form">
          <h2 className="g1">
            <font color="#0A5BB4"> F </font>
            <font color="#C11D38"> U </font>
            <font color="#EDF750"> N </font>
            <font color="#0A5BB4"> D </font>
            <font color="#71EFA3"> O </font>
            <font color="#8D1F38"> O </font>
          </h2>
          <h2>Create Google Account</h2>
          <div className="singup-container">
            <div className="firstname">
              <TextField id="firstname" label="Firstname" variant="outlined" />
            </div>
            <div className="lastname">
              <TextField id="lastname" label="Lastname" variant="outlined" />
            </div>
          </div>
          <div className="username">
            <TextField
              id="username"
              label="UserName"
              variant="outlined"
              helperText="You can use letters,numbers & periods"
            />
          </div>

          <div class="email-link">
            <a href="#">Use my current email address instead</a>
          </div>
          <div className="singup-container">
            <div className="password">
              <TextField id="password" label="Password" variant="outlined" />
            </div>

            <div className="confirmpassword">
              <TextField
                id="confirmpassword"
                label="Confirm password"
                variant="outlined"
              />
            </div>
          </div>
          <div className="singup-container">
            <FormControlLabel
              control={<Checkbox value="password" color="primary" />}
              label="Show Password"
            />
          </div>
          <div class="next-container">
            <button type="button" class="next-btn" size="small">
              Next
            </button>
            <p class="sign-in-instead">
              <a href="#">Sign in instead </a>
            </p>
          </div>
        </div>
        <div className="image" >
          {" "}
          <img class="logo-image" src={logo} alt="logo" />{" "}
          <span>One account. All of Fundoo working for you.</span>
        </div>
      </form>
    );
  }
}

export default Reg;
