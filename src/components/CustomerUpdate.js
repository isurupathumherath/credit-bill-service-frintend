import styles from '../assets/css/AddCustomer.module.css'
import React, {useState,useEffect} from "react"
import axios from "axios";
import { useParams } from 'react-router';

// reactstrap components
import {
  Button,
  Label,
  
  
  Input,
  Container,
  
} from "reactstrap";

// core components

export default function CustomerUpdate() {
  const [firstName, setfName]=useState("");
  const [middleName, setmName]=useState("");
  const [lastName, setlName]=useState("");
  const [address, setAddress]=useState("");
  const [emailAddress, setEmail]=useState("");
  const [mobileNumber, setMobile]=useState("");
  const [nic, setNic]=useState("");
  const [dob, setDob]=useState("");
  const [gender, setGender]=useState("");
  const [companyid, setCid]=useState("");
  const [balance, setBalance]=useState("");

  const [addedBy, setAddBy]=useState("");

  const {id}=useParams();

  useEffect(()=>{
      axios.get(`http://localhost:8000/customer/customerById/${id}`).then((res)=>{
          console.log(res.data);
          setfName(res.data.firstName);
          setmName(res.data.middleName);
          setlName(res.data.lastName);
          setAddress(res.data.address);
          setEmail(res.data.emailAddress);
          setMobile(res.data.mobileNumber);
          setNic(res.data.nic);
          setDob(res.data.dob);
          setGender(res.data.gender);
          setCid(res.data.companyid);
          setBalance(res.data.balance);
          setAddBy(res.data.addedBy);

      }).catch((err)=>{
          console.log(err);
      })
  },[]);
 


  function onSubmit(e){
    e.preventDefault();
    
    const updateCustomer={
     firstName,
     middleName,   
     lastName,
     address,
     emailAddress,
     mobileNumber,
     nic,
     dob,
     gender,
     companyid,
     balance,
     addedBy
    }
    
    axios.put(`http://localhost:8000/customer/update/${id}`, updateCustomer).then(()=>{
      alert("Customer Updated");
      window.location.reload();

    }).catch((error)=>{
      alert(error)
    })
  }
  

 
  
  return (
    <>
   
      <div style = {{paddingTop :"50px"}} className ={styles.body}>
      <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Update Customer</h3><br/><br/>
      <Container>
      
      <form onSubmit={onSubmit} >

      <div class="container">
      <div class="row">
      <div class="col-sm">
      <label for = "firstName"><h5>First Name</h5></label>
                  
                    
                  <Input placeholder="First Name" type="text"  value={firstName}
                   required onChange={(e)=>{
                  setfName(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "middleName"><h5>Middle Name</h5></label>
                  
                    
                  <Input placeholder="Enter Middle Name" type="text" value={middleName}
                   onChange={(e)=>{
                  setmName(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "lastName"><h5>Last Name</h5></label>
                  
                    
                  <Input placeholder="Enter Last Name" type="text" required value={lastName}
                  onChange={(e)=>{
                  setlName(e.target.value);
                   }} />
    </div>
  </div>
</div> 
<br/>


<div class="container">
      <div class="row">
      <div class="col-sm">
     
        
      <label><h5>Address</h5></label>
                  
                    
                  <textarea placeholder="Enter Address" type="text" value={address}
                  required onChange={(e)=>{
                  setAddress(e.target.value);
                   }} />
              
    </div>
   
    
   
  </div>
</div> 
<br/>              
                
             
               
                 
      <div class="container">
      <div class="row">

      <div class="col-sm">
      <label for ="emailAddress"><h5>Email Address</h5></label>
                 
                    
                    <Input placeholder="Enter Email" type="email" value={emailAddress}
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title = "Enter a valid email" required
                    onChange={(e)=>{
                    setEmail(e.target.value);
                     }}/>
    </div>
      
    <div class="col-sm">
    <label for = "mobileNumber"><h5>Mobile Number</h5></label>
                 
                 <Input placeholder="Enter Mobile Number" type="text" value={mobileNumber}
                 pattern = "[0-9]{10}" title = "Enter a 10 digit phone number starting with 0"  required onChange={(e)=>{
                 setMobile(e.target.value);
                  }}/>
              
    </div>
   
  </div>
</div> 

<br/>


<div class="container">
      <div class="row">

      <div class="col-sm">
    <label for ="nic"><h5>NIC Number</h5></label>
                  
                    
                  <Input placeholder="Enter NIC" type="text" value={nic}
                   onChange={(e)=>{
                  setNic(e.target.value);
                   }}/>
    </div>
    <div class="col-sm">
    <label for ="dob"><h5>Date of Birth</h5></label> 
                
                    
                <Input placeholder="Enter Date of Birth" type="Date" value={dob}
                 onChange={(e)=>{
                setDob(e.target.value);
                 }}/>
              
    </div>
     
    
    <div class="col-sm">
    <label for ="gender"><h5> Gender</h5></label>
                
                    
                <Input placeholder="Select Gender" type="text" value={gender}
                onChange={(e)=>{
                setGender(e.target.value);
                 }}/>
    </div>
    
  </div>
</div> 


<br/>

<div class="container">
      <div class="row">

      <div class="col-sm">
      <label for ="companyId"><h5>Company ID</h5></label>
                
                    
                <Input placeholder="Enter Comapany ID" type="text" value={companyid}
                onChange={(e)=>{
                setCid(e.target.value);
                 }}/>
    </div>
     
  <div class="col-sm">
    <label for ="balance"><h5>Balance</h5></label>
                
                    
                <Input placeholder="Enter Balance" type="text" value={balance}
                onChange={(e)=>{
                setBalance(e.target.value);
                 }}/>
              
    </div>
   
    <div class="col-sm">
     
     <label for ="addedBy"><h5>Added By</h5></label>
               
                   
               <Input placeholder="Enter Adding Person" type="text" value={addedBy}
               onChange={(e)=>{
               setAddBy(e.target.value);
                }}/>
   </div>
  </div>
</div> 
 <br/>
                 
                  <center>
                  <button type="submit" className="btn btn-primary">Update Customer</button>
                  </center>
                </form>
                </Container>
                
            
             
        
         
       
      </div>
  
    </>
  );
}


