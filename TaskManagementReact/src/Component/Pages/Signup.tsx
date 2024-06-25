import React from 'react'
import { TextField } from '@mui/material'
const Signup = () => {
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
                            <form className=''>
                                <div className='login-form-section   '>
                                    <h3 className='mt-4'>Signup to your account</h3>
                                    <p><span className='grey'>Already have an account? <a href="/Dashboard">Login Now</a></span> </p>
                                    <div className=' col-12'>
                                        <div className="mt-3 col-lg-12 col-md-12  col-sm-12">
                                            <TextField
                                                className="input-box"
                                                type="text"
                                                label="First Name"
                                                name="First Name"
                                                required
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                        <div className="mt-3 col-lg-12  col-md-12  col-sm-12">
                                            <TextField
                                                className="input-box"
                                                type="text"
                                                label="Last Name"
                                                name="Last Name"
                                                required
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                    </div>
                                    <div className=" col-12 forgot-password-section mt-4">
                                        <TextField
                                            label="Phone No."
                                            name="Phone No."
                                            id="Phone No."
                                            type="tel"
                                            required
                                            className="input-box"
                                            // placeholder="Password"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <TextField
                                            className="input-box"
                                            type="email"
                                            label="Enter your email"
                                            required
                                            name="Email"
                                            // placeholder="Username/Email"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="col-12 mt-4">
                                        <TextField
                                            className="input-box"
                                            type="text"
                                            label="Create Username"
                                            name="Username"
                                            required
                                            // placeholder="Username/Email"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className=" col-12 forgot-password-section mt-4">
                                        <TextField
                                            label="Create Password"
                                            name="password"
                                            id="password"
                                            type="password"
                                            required
                                            className="input-box"
                                            // placeholder="Password"
                                            style={{ color: "white" }}
                                        />
                                    </div>


                                    <button className='main-btn mt-4' >Signup</button>
                                </div>
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

export default Signup