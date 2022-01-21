import React, { Component } from "react";
import './ResetPassword.css'
import { TextField } from "@material-ui/core";

export class ResetPassword extends Component {
    render() {
        return (
            <div className="reset-main-page">
                <div className="reset-page">
                    <div className="first-part">
                        <div className="fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="find-email">Find your email</p>
                        <p className="enter-password">Enter password</p>
                    </div>
                    <div className="password">
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
                    </div>
                    <div className="confirm-password">
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth />
                    </div>
                    <button className="next-button">Next</button>
                </div>
            </div>
        )
    }
}

export default ResetPassword