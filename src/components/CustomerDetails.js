import React from "react";
import customerStyles from "../assets/css/CusDetails.module.css";


import {
  Label,
  Input,
  Button,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Alert,
  Container,
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();



function CustomerDetails() {
  const [customers, setcustomers] = useState([]);
  
  const deleteCustomer = (customer) => {
    if (
      window.confirm(
        "Customer " +
          customer.customerid +
          " (" +
          customer.firstName +
          " " +
          customer.lastName +
          ") " +
          "will be removed from the database"
      )
    ) {
      axios
        .delete(`http://localhost:8000/customer/delete/${customer.customerid}`)
        .then((res) => {
          console.log(res);
          toast.success("Customer deleted!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong :(", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 10000,
            hideProgressBar: false,
          });
        });
      let filteredCustomers = customers.filter((cid) => cid !== customer);
      setcustomers(filteredCustomers);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/customer/customers")
      .then((res) => {
        setcustomers(res.data);
      })
      .catch((err) => {
        alert("Something went wrong :(");
        console.log(err);
      });

    return () => {
      // cleanup
    };
  }, []);

  let history = useHistory();

  
  return (
    <>
    
    
      <div className={customerStyles.viewcustomerDiv}>
        <center><h3 className={customerStyles.header}>Customer Details</h3></center>
        <br />
      
        <table width="100%" border="2px" className={customerStyles.tbldata}>
          <tr>
            
            <th className={customerStyles.tbldata}>First Name</th>
            <th className={customerStyles.tbldata}>Middle Name</th>
            <th className={customerStyles.tbldata}>Last Name</th>
            <th className={customerStyles.tbldata}>Address</th>
            <th className={customerStyles.tbldata}>E-Mail</th>
            <th className={customerStyles.tbldata}>Mobile Number</th>
            <th className={customerStyles.tbldata}>NIC</th>
            <th className={customerStyles.tbldata2}>DOB</th>
            <th className={customerStyles.tbldata}>Gender</th>
            <th className={customerStyles.tbldata}>Company ID</th>
            <th className={customerStyles.tbldata}>Balance</th>
            <th className={customerStyles.tbldata}>Added_At</th>
            <th className={customerStyles.tbldata}>Added_By</th>
            <th className={customerStyles.tbldata}>Update_At</th>
            <th className={customerStyles.tbldata}>Update_By</th>
            <th className={customerStyles.tbldata}>Actions</th>
          
          </tr>
          {customers
           
            .map((customer) => (
              <tr className={customerStyles.tbldata}>
                <td className={customerStyles.tbldata}>{customer.firstName}</td>
                <td className={customerStyles.tbldata}>{customer.middleName}</td>
                <td className={customerStyles.tbldata}>{customer.lastName}</td>
                <td className={customerStyles.tbldata}>{customer.address}</td>
                <td className={customerStyles.tbldata}>{customer.emailAddress}</td>
                <td className={customerStyles.tbldata}>{customer.mobileNumber}</td>
                <td className={customerStyles.tbldata}>{customer.nic}</td>
                <td className={customerStyles.tbldata}>{customer.dob}</td>
                <td className={customerStyles.tbldata}>{customer.gender}</td>
                <td className={customerStyles.tbldata}>{customer.companyid}</td>
                <td className={customerStyles.tbldata}>{customer.balance}</td>
                <td className={customerStyles.tbldata}>{customer.addedAt}</td>
                <td className={customerStyles.tbldata}>{customer.addedBy}</td>
                <td className={customerStyles.tbldata}>{customer.updatedAt}</td>
                <td className={customerStyles.tbldata}>{customer.updatedBy}</td>
                <td className={customerStyles.tbldata}>
                  <button
                    className={customerStyles.btnEdit}
                    onClick={() => {
                      //     handleEdit(customer);
                      history.push(`/edit-customer/${customer._id}`);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className={customerStyles.btnDelete}
                    onClick={() => {
                      deleteCustomer(customer);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>

    
    </>
  );
}

export default CustomerDetails;
