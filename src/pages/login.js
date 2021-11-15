import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([]);

    useEffect(() => {
        //for not this is empty
    }, []);

    async function Login() {
        const user = { username, password }
        axios.post(`${process.env.AUTH_API}/login`, user)
            .then(response => {
                console.log(response)
                if (response.data == null) {
                    Swal.fire({
                        title: 'Login Failed!',
                        text: 'Username or Password incorrect',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                }
                else {
                    if (response.data.role == "Admin") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated`,
                            icon: 'success'
                        });
                        setUser(response.data)
                        //response will contain token and name
                        // authenticate(response, () => props.history.push(`/staffFirstLogin/${response.data.employeeId}`), 2000);
                        // alert("First Login")
                        // setTimeout(() => { window.location.href = `/staffFirstLogin/${response.data.employeeId}` }, 2000);
                    }
                    else if (response.data.role == "Common") {
                        Swal.fire({
                            title: 'Welcome!',
                            text: `User ${response.data.username} Authenticated`,
                            icon: 'success'
                        });
                        setUser(response.data)
                        
                        // authenticate(response, () => props.history.push(`/staffLandingPage/${response.data.employeeId}`), 2000);

                        // alert("Active Account")
                        //response will contain token and name
                        // authenticate(response, () => props.history.push('/create'));
                        // setTimeout(() => { window.location.href = `/staffLandingPage/${response.data.employeeId}` }, 2000);
                    }
                    else {
                        Swal.fire({
                            title: 'Login Failed!',
                            text: 'Username or Password incorrect',
                            icon: 'error',
                            confirmButtonText: 'Try again'
                        });
                    }


                }

            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login Failed',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            });
    };
}

export default Login;