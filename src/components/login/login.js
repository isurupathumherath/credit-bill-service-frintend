import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../style/login/login.css';
import { authenticate, getUser } from '../../api/userHelper';

//Load .env component
require('dotenv').config();

const LoginForm = props => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [user, setUser] = useState([]);

    const Swal = require('sweetalert2');

    useEffect((props) => {
        getUser() && props.history.push('/');
    }, []);

    const Login = () => {
        const user = { username, password }
        axios.post(`${process.env.REACT_APP_API}/login`, user)
            .then(response => {
                console.log(response.data.user)
                if (response.data.user === null) {
                    Swal.fire({
                        title: 'Login Failed!',
                        text: 'Username or Password incorrect',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                }
                else {
                    if (response.data.user.role === "Admin") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.user.username} Authenticated & Admin Account`,
                            icon: 'success'
                        });
                        // setUser(response.data.user)

                        //response will contain token and name
                        authenticate(response.data, () => props.history.push('/'), 2000);
                        // setTimeout(() => { window.location.href = `/staffFirstLogin/${response.data.employeeId}` }, 2000);
                    }
                    else if (response.data.user.role === "Common") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated & Common Account`,
                            icon: 'success'
                        });
                        // setUser(response.data.user)

                        // authenticate(response, () => props.history.push(`/staffLandingPage/${response.data.employeeId}`), 2000);
                        //response will contain token and name
                        // authenticate(response, () => props.history.push('/create'));
                        // setTimeout(() => { window.location.href = `/staffLandingPage/${response.data.employeeId}` }, 2000);
                    }
                    else {
                        Swal.fire({
                            title: 'Login Failed!',
                            text: 'Server Error',
                            icon: 'error',
                            confirmButtonText: 'Try again'
                        });
                    }
                }

            })
            .catch(error => {
                Swal.fire({
                    title: 'Login Failed!',
                    text: `Username or Password incorrect - ${error}`,
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            });
    };

    return (
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-7">
                    <img alt="Login" src="https://www.pngitem.com/pimgs/m/127-1272627_billing-software-hd-png-download.png" />
                </div>
                <div className="col-md-8 col-lg-5">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Welcome back!</h3>

                                    <div>
                                        <div className="form-floating mb-3">
                                            <input required type='username'
                                                className="form-control"
                                                placeholder="Enter Your Username"
                                                value={username}
                                                onChange={(e) => { setUsername(e.target.value) }} />
                                            <label for="floatingInput">Username</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input required type='password'
                                                className="form-control"
                                                placeholder="Enter Your Password"
                                                value={password}
                                                onChange={(e) => { setPassword(e.target.value) }} />
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                            <label className="form-check-label" for="rememberPasswordCheck">
                                                Remember password
                                            </label>
                                        </div>

                                        <div className="d-grid">
                                            {/* <button onClick={Login} className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button> */}
                                            <button onClick={Login}
                                                className="btn btn-info btn-block btn-lg login-btn"
                                                style={{ marginTop: '15px' }}><i> <b> Login </b></i>
                                            </button>
                                            <br />
                                            <div className="text-center">
                                                <a className="small" href="/">Forgot password? Please Contact Your Administrator</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm