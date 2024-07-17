import { TextField, Grid, Button, Typography, LinearProgress, Dialog, Box } from "@mui/material";
import React, { useState } from "react";
// import { Form, useNavigate } from "react-router-dom";
import useAuth, { apiResponse, authData } from "../../Context/AuthProvider";
import { Field, Form, Formik } from "formik";
import { config } from "./Constant";
import { CustomInputComponent } from "../Elements/input";
import { useNavigate } from "react-router-dom";



export const LoginPage = () => {
  const { login, error, user } = useAuth();
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  // const token = user?.token;

  const handleLogin = (resp: apiResponse<authData>) => {
    debugger;
    // navigate("/Users")
    console.log(login);
    login(resp);

  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const openForgotPasswordDialog = () => {
    setIsDialogOpen(true);
  };

  const closeForgotPasswordDialog = () => {
    setIsDialogOpen(false);
    setSelectedEmail("");
  };
  const [selectedEmail, setSelectedEmail] = useState("");




  return (
    <React.Fragment>
      {loading && <LinearProgress color="info" sx={{ backgroundColor: "#132D3D" }} />}

      <section className="main-section">
        <div className="container">
          <div style={{ textAlign: "center" }} className="filemule-main">
            <Formik
              initialValues={{ Username: "", password: "" }}
              //  validationSchema={LoginModel_VS}
              validateOnChange={true}
              onSubmit={(data, { setSubmitting }) => {
                console.log("inside login")
                setloading(true);

                fetch(config.url.API_URL + "/Auth/Login", {
                  method: "POST",
                  headers: new Headers({
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${token}`,
                  }),

                  body: JSON.stringify(data), // <-- Post parameters
                })
                  .then((response) => {
                    if (response.ok) {
                      return response.json();
                    } else {
                      setloading(false);
                      alert("invalid username or password");
                      setSubmitting(false);
                      throw new Error("Something went wrong");
                    }
                  })
                  .then((res) => {
                    // Do something with the response
                    setloading(false);
                    handleLogin(res);
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form className="loginpage-samespace">
                  {error && <p className="red">Bad login/password </p>}
                  <section className="main-section mt-5">
                    <Grid container justifyContent="center" className="container">
                      <Grid item xs={12} style={{ textAlign: "left" }} className="img-logo mt-3">
                        <img src="/assets/image/logo-inverse.png" alt="" />
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: "right" }} className="heading-daily-task">
                        <Typography variant="h2">
                          Daily <span className="red">Task</span> Management
                        </Typography>
                      </Grid>

                      <Grid container spacing={2} className="main-section-form mt-5">
                        <Grid item lg={6} md={12} sm={12} xs={12} className="login-vector">
                          <img src="/assets/image/3198965.jpg" alt="" />
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12} className="left-main-form p-5">
                          {/* <Form className="login-form-section"> */}
                          <Typography variant="h3" className="mt-4">Login to your account</Typography>
                          <Typography variant="body1" className="mt-3">
                            <span className="grey">Don't have an account?</span>
                            <span> <a href="/Signup">Signup Now</a></span>
                          </Typography>
                          <Grid container className="mt-5 text-fields">
                            <Grid item xs={12}>
                              <label htmlFor="username" className="labels">Username</label>
                              <Field
                                name="username"
                                component={CustomInputComponent}
                                className="input-box"
                                type="text"
                                fullWidth
                              // style={{ color: "white" }}
                              />
                              {/* <Field
                                  className="input-box"
                                  component={CustomInputComponent}
                                  type="text"
                                  label="Username"
                                  name="Username"
                                  placeholder="Username/Email"
                                  style={{ color: "white" }}
                                /> */}
                            </Grid>
                          </Grid>
                          <Grid container className="forgot-password-section mt-4">
                            <Grid item xs={12}>
                              <label htmlFor="password" className="labels">Password</label>
                              <Field
                                name="password"
                                id="password"
                                type="password"
                                className="input-box"
                                fullWidth
                              // style={{ color: "white" }}
                              />
                            </Grid>
                          </Grid>
                          <Grid container className="mt-4" justifyContent="space-between" alignItems="center">
                            <Grid item>
                              <a href="0" className="forget-password">Forgot password?</a>
                            </Grid>
                            <Grid item>
                              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                              <label htmlFor="rememberMe" className="ms-2"> Remember me</label>
                            </Grid>
                          </Grid>
                          <Button
                            variant="contained"
                            className="main-btn mt-3"
                            type="submit"
                          >
                            Login
                          </Button>
                          {/* </Form> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </section>

                  <Dialog
                    open={isDialogOpen}
                    onClose={closeForgotPasswordDialog}
                    fullWidth
                    maxWidth="sm"
                    sx={{ textAlign: "center" }}
                  >
                    <Box p={3}>

                      <div className="d-flex justify-content-between" >
                        {loading && (
                          <LinearProgress sx={{ backgroundColor: "#132D3D" }} />
                        )}
                        <div><label htmlFor="email" className="form-label mail-dialog">
                          Please enter your email address:
                        </label></div>
                        <div className="cut-main-btn"><Button
                          className="cross-cut-icon"
                          onClick={closeForgotPasswordDialog}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 8L8 24M8 8L24 24"
                              stroke="#162E3C"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Button></div>
                      </div>

                      <button
                        className="active-btn-blue p-2"
                        // onClick={() => {
                        //   sendResetEmail(selectedEmail);
                        // }}
                        style={{
                          marginTop: "56px",
                          backgroundColor: "rgba(2, 164, 227, 1) ",
                        }}
                        disabled={isButtonDisabled}
                      >
                        Send Reset Email
                      </button>
                    </Box>
                  </Dialog>


                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>


    </React.Fragment>
  )



};



