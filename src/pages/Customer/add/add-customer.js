import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {
    Layout
} from "../../../Layout";

const AddCustomer = () => {
    const [state, setState] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        address: "",
        mobileNumber: "",
        email: "",
        nic: "",
        dob: "",
        gender: "",
        companyId: "",
        balance: "",
        addedBy: "",
        type: ""
    });

    //destructure values from state
    const {
        firstName,
        middleName,
        lastName,
        address,
        mobileNumber,
        email,
        nic,
        dob,
        gender,
        companyId,
        balance,
        addedBy,
        type,
    } = state;

    //Change Hander
    function handleChange(name) {
        return function (event) {
            setState({ ...state, [name]: event.target.value });
        };
    }

    //Submit Handler
    const handleSubmit = (event) => {
        event.preventDefault();
        console.table({
            firstName,
            middleName,
            lastName,
            address,
            mobileNumber,
            email,
            nic,
            dob,
            gender,
            companyId,
            balance,
            addedBy,
            type,
        });

        axios
            .post(`http://localhost:8000/employee/add`, {
                firstName,
                middleName,
                lastName,
                address,
                mobileNumber,
                email,
                nic,
                dob,
                gender,
                companyId,
                balance,
                addedBy,
                type,
            })
            .then((response) => {
                console.log(response);
                Swal.fire(
                    `Customer ${response.data.firstName} is Added`,
                    'Click Ok to continue',
                    'success'
                )
                //empty state
                setState({
                    ...state,
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    address: "",
                    mobileNumber: "",
                    email: "",
                    nic: "",
                    dob: "",
                    gender: "",
                    companyId: "",
                    balance: "",
                    addedBy: "",
                });
            })
            .catch((error) => {
                console.log(error.Response);
                Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.error}`,
                    // text: `${error.response.data.error}`,
                    footer: 'Please try again'
                })
            });
    };

    return (
        <div id="wrapper">
            <div className="container">
                <div className="card">
                    <div className="card-body"></div>
                    <h1 align="center">REGISTER NEW EMPLOYEE</h1>
                    <br />

                    {/* {JSON.stringify(state)} */}

                    <div className="card">
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">First Name</label>
                                            <input onChange={handleChange('firstName')} value={firstName} type="text" className="form-control" placeholder="Enter the First Name" pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters." required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Middle Name</label>
                                            <input onChange={handleChange('middleName')} value={middleName} type="text" className="form-control" placeholder="Enter the Middle Name" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Last Name</label>
                                            <input onChange={handleChange('lastName')} value={lastName} type="text" className="form-control" placeholder="Enter the Last Name" pattern="[A-Za-z]{1,250}" title="Characters can only be A-Z and a-z and must be less than 250 characters" required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Gender</label>
                                            <select id="type" value={gender} onChange={handleChange("gender")} className="form-control">
                                                <option value="" disabled selected>Select a One</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="not">Proper Not to Say</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Mobile Number</label>
                                            <input onChange={handleChange('mobileNumber')} value={mobileNumber} type="text" className="form-control" placeholder="Enter the Mobile Number" pattern="[0-9]{10}" title="Invalid Mobile Number." required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Email Address</label>
                                            <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="Enter the Email Address" title="Invalid Email Address." required />
                                        </div>
                                    </div>
                                    <div class="col">

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Birth Day</label>
                                            <input type="date" onChange={handleChange('dob')} value={dob} className="form-control" placeholder="Enter the Date of Birth" required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">NIC Number</label>
                                            <input onChange={handleChange("nic")} value={nic} type="text" className="form-control" placeholder="Enter the NIC" pattern="[0-9]{12}" title="Invalid NIC Number." required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="form-group">
                                            <label className="text-muted">Account Type</label>
                                            <select id="type" value={type} onChange={handleChange("type")} className="form-control">
                                                <option value="" disabled selected>Select a Account Status</option>
                                                <option value="personal">Personal</option>
                                                <option value="company">Company</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="text-muted">Address</label>
                                    <textarea onChange={handleChange("address")} value={address} type="text" className="form-control" placeholder="Enter the Address" pattern="{1,300}" required />
                                </div>


                                <br />
                                <div>
                                    <button className="btn btn-primary btn-lg btn-block">Register New Staff Member</button>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddCustomer;