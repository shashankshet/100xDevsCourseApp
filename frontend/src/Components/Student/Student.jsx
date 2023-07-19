import { Typography, Button, Grid, Link } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import "./Student.css";


export const Login = () => {
  return (
    <div className="RegisterSection">
    <div className="textField">
      <Typography variant="h6">Login as Student</Typography>
    </div>
    <div className="textField">
      <TextField  fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
    </div>
    <div className="textField">
      <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
    </div>
    <Link className="forgotPassLink" to="/forgotfassword">Forgot Password?</Link>
    <div className="textField">
      <Button className="RegisterBtn" size="medium" variant="contained">
        Login
      </Button>
    </div>
   <div>
    New User? Register <Link to={"/"}>here</Link>
   </div>
  </div>
  )
}

export const Register = () => {
  return (
    <div className="RegisterSection">
    <div className="textField">
      <Typography variant="h6">Register as Student</Typography>
    </div>
    <div className="textField">
      <TextField  fullWidth={true} id="outlined-basic" label="First Name" variant="outlined" />
    </div>
    <div className="textField">
      <TextField  fullWidth={true} id="outlined-basic" label="Last Name" variant="outlined" />
    </div>
    <div className="textField">
      <TextField  fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
    </div>
    <div className="textField">
      <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
    </div>
    <div className="textField">
      <Button className="RegisterBtn" size="medium" variant="contained">
        Register
      </Button>
    </div>
   <div>
    New User? Register <Link to={"/Register"}>here</Link>
   </div>
  </div>
  )
}


export const Student = () => {
  return (
    <Grid container className="mainDiv">
      <Grid item xs={12} className="reisterGrid">
        <Login/>
      </Grid>

    </Grid>
  );
};


