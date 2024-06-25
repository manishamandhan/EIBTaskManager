import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (

        <section>

            <section className="main-section">
                <div className="container">
                    <div className='img-logo mt-3' style={{ textAlign: "left" }}>
                        <img src="/assets/image/logo-inverse.png" alt="" />
                    </div>
                    <div className='heading-daily-task' style={{ textAlign: "right" }}>
                        <h2>Daily <span className='red'>Task</span> Management </h2>
                    </div>

                    <div className=' row mt-5 col-12 main-section-form'>
                        <div className='login-vector  col-lg-6 col-md-12 col-sm-12 col-xs-12' >
                            <img src="/assets/image/3198965.jpg" alt="" />
                        </div>
                        <div className=' left-main-form  col-lg-6 col-md-12 col-sm-12 col-xs-12 ' >
                            <form className='login-form-section'>
                                <h3 className='mt-4' >Login to your account</h3>
                                <p className='mt-3'><span className='grey'>Don't have an account?</span><span > <a href="/Signup"   >Signup Now</a></span> </p>
                                <div className="mt-5 text-fields">
                                    <TextField
                                        className="input-box"
                                        type="text"
                                        required
                                        label="Username"
                                        name="Username"
                                        // placeholder="Username/Email"
                                        style={{ color: "white" }}
                                    />
                                </div>
                                <div className="forgot-password-section mt-5">
                                    <TextField
                                        label="Password"
                                        name="password"
                                        required
                                        id="password"
                                        type="password"
                                        className="input-box"
                                        // placeholder="Password"
                                        style={{ color: "white" }}
                                    />
                                </div>
                                <div className='mt-4 d-flex justify-content-between align-items-center'>
                                    <div className=" forget-password ">
                                        <a href="0" >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            value="lsRememberMe"
                                            id="rememberMe"
                                        />
                                        <label htmlFor="rememberMe " className='ms-2'>  Remember me</label>
                                    </div>
                                </div>


                                <button className='main-btn mt-3' >Login</button>
                            </form>
                        </div>
                    </div>
                    <div className='footer-title'>
                        <p>Copyright © 2024 Expert It Brains Pvt. Ltd.</p>
                    </div>

                </div>
            </section>
        </section >
    )
}

export default Login