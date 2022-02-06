/*
    Created by - Isuru Pathum Herath
    On - 06 Feb 2022
    Name - addStaffMember
    Last Update - 11/09/2021
 */

import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const Add = () => {
    const [state, setState] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        DOB: "",
        NIC: "",
        address: "",
        type: "",
        accountStatus: "",
    });
}