import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";
import { Button, Typography } from "@mui/material";
import { Student } from "../Student/Student";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <Grid container className="Home">
      <Grid item xs={12} md={6}>
        <img
          alt="cover-img"
          className="cover-img"
          src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
        />
      </Grid>
      <Grid item xs={12} md={6} className="main-content">
        <Typography style={{ paddingBottom: "5vh" }} variant="h3">
          Welcome to 100x devs page
        </Typography>
        <Typography variant="h6">
          100x devs is an elite group of professional software developers
          typically refers to a selected group of highly skilled and experienced
          individuals who have demonstrated exceptional expertise and
          accomplishments in the field of software development. These developers
          are often recognized for their deep knowledge, exceptional
          problem-solving abilities, and consistent delivery of high-quality
          software solutions.
        </Typography>
        <div className="btns">
          <div className="btn">
            <Link to="/student">
              <Button size="large" variant="contained">
                Join as a Student
              </Button>
            </Link>
          </div>
          <div className="btn">
            <Link to="/instructor">
            <Button size="large" variant="contained">
              Join as an Instructor
            </Button>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
