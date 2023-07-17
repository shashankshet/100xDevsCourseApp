// import { Typography, Button } from "@mui/material";
// import React from "react";
// import TextField from "@mui/material/TextField";
// import "./Student.css";
// export const Student = () => {
//   return (
//     <div className="mainDiv">
//       <div className="loginSection">
//         <div className="textField">
//         <Typography variant="h6">Login as Student</Typography>     
//         </div>
       
//         <div className="textField">
//           <TextField id="outlined-basic" label="Username" variant="outlined" />
//         </div>
//         <div className="textField">
//           <TextField id="outlined-basic" label="password" variant="outlined" />
//         </div>
//         <div className="btn">
//           <Button size="medium" variant="contained">
//             Login
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Typography, Button, Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import "./Student.css";

export const Student = () => {
  return (
    <Grid container className="mainDiv">
      <Grid item xs={12}>
        <div className="loginSection">
            
          <div className="textField">
            <Typography variant="h6">Login as Student</Typography>
          </div>

          <div className="textField">
            <TextField id="outlined-basic" label="Username" variant="outlined" />
          </div>
          <div className="textField">
            <TextField id="outlined-basic" label="Password" variant="outlined" />
          </div>
          <div className="btn">
            <Button size="medium" variant="contained">
              Login
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} className="reisterGrid">
        <div className="RegisterSection">
          <div className="textField">
            <Typography variant="h6">New User? Register now</Typography>
          </div>
          <div className="textField">
            <TextField  fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div className="textField">
            <TextField  fullWidth={true} id="outlined-basic" label="Username" variant="outlined" />
          </div>
          <div className="textField">
            <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
          </div>
          <div className="textField">
            <Button size="medium" variant="contained">
              Register
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};


