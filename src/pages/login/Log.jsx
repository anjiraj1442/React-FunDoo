import React, { Component } from "react";
import '../login/Log.css'
import { TextField } from "@material-ui/core";

export class Log extends Component {
    render() {
        return (
            <div className="login-main-page">
                <div className="login-content">
                    <div className="first-content">
                        <div className="Fundoo">
                        <font color="#0A5BB4"> F </font>
                        <font color="#C11D38"> U </font>
                        <font color="#EDF750"> N </font>
                        <font color="#0A5BB4"> D </font>
                        <font color="#71EFA3"> O </font>
                        <font color="#8D1F38"> O </font> 
                        </div>
                        <p className="sign-in">Sign in</p>
                        < p className="account">Use your Fundoo Account</p>
                    </div>
                    <div className="email">
                        <TextField id="email" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth />
                    </div>
                    <br></br>
                    <div className="password">
                        <TextField id="Password" label="Password" variant="outlined" helperText="Forgot Password" fullWidth />

                    </div>
                    <div className="else-computer">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <p className="c-text" >Create account ?</p>
                        <div className="box">
                            <button className="c-next">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Log