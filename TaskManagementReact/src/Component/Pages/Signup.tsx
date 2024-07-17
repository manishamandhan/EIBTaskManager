import React from "react";
import { TextField, Grid, Button, Typography } from "@mui/material";

const Signup = () => {
  return (
    <section>
      <section className="main-section">
        <Grid container justifyContent="center" className="container">
          <Grid item xs={12} style={{ textAlign: "left" }} className="img-logo mt-3">
            <img src="/assets/image/logo-inverse.png" alt="" />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "right" }} className="heading-daily-task">
            <Typography variant="h2">
              Daily <span className="red">Task</span> Management
            </Typography>
          </Grid>

          <Grid container spacing={2} className="main-section-form mt-4">
            <Grid item lg={6} md={12} sm={12} xs={12} className="login-vector">
              <img src="/assets/image/3198965.jpg" alt="" />
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12} className="left-main-form p-5">
              <form className="login-form-section">
                <Typography variant="h3" className="mt-4">
                  Signup to your account
                </Typography>
                <Typography variant="body1" className="mt-2" >
                  <span className="grey ">
                    Already have an account? <a href="/Dashboard">Login Now</a>
                  </span>
                </Typography>
                <Grid container spacing={2} className="mt-1">
                  <Grid item xs={12}>
                    <label htmlFor="First Name" className="labels">
                      First Name
                    </label>
                    <TextField className="input-box" type="text" name="First Name" required fullWidth style={{ color: "white" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="Last Name" className="labels">
                      Last Name
                    </label>
                    <TextField className="input-box" type="text" name="Last Name" required fullWidth style={{ color: "white" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="forgot-password-section mt-1">
                  <Grid item xs={12}>
                    <label htmlFor="Phone No" className="labels">
                      Phone No
                    </label>
                    <TextField name="Phone No." id="Phone No." type="tel" required fullWidth className="input-box" style={{ color: "white" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="mt-1">
                  <Grid item xs={12}>
                    <label htmlFor="Enter your email" className="labels">
                      Enter your email
                    </label>
                    <TextField className="input-box" type="email" name="Email" required fullWidth style={{ color: "white" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="mt-1">
                  <Grid item xs={12}>
                    <label htmlFor="Create Username" className="labels">
                      Create Username
                    </label>
                    <TextField className="input-box" type="text" name="Username" required fullWidth style={{ color: "white" }} />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="forgot-password-section mt-1">
                  <Grid item xs={12}>
                    <label htmlFor="Create Password" className="labels">
                      Create Password
                    </label>
                    <TextField name="password" id="password" type="password" required fullWidth className="input-box" style={{ color: "white" }} />
                  </Grid>
                </Grid>
                <Button variant="contained" className="main-btn mt-4" type="submit">
                  Signup
                </Button>
              </form>
            </Grid>
          </Grid>
          <Grid item xs={12} className="footer-title pb-4">
            <Typography variant="body2">Copyright © 2024 Expert It Brains Pvt. Ltd.</Typography>
          </Grid>
        </Grid>
      </section>
    </section>
  );
};

export default Signup;
