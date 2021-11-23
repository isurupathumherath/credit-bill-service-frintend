import styles from '../assets/css/AddCustomer.module.css'
import React, {useState} from "react"
import axios from "axios";

// reactstrap components
import {
  Button,
  Label,
  
  
  Input,
  Container,
  
} from "reactstrap";

// core components

export default function CustomerAdd() {
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
 


  function sendData(e){
    e.preventDefault();
    
    const newCustomer={
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
    
    axios.post("http://localhost:8000/customer/add", newCustomer).then(()=>{
      alert("Customer Added");
      window.location.reload();

    }).catch((error)=>{
      alert(error)
    })
  }
  

 
  
  return (
    <>
   
      <div style = {{paddingTop :"50px"}} className ={styles.body}>
      <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert New Customer</h3><br/><br/>
      <Container>
      
      <form onSubmit={sendData} >

      <div class="container">
      <div class="row">
      <div class="col-sm">
      <label for = "firstName"><h5>First Name</h5></label>
                  
                    
                  <Input placeholder="First Name" type="text" 
                   required onChange={(e)=>{
                  setfName(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "middleName"><h5>Middle Name</h5></label>
                  
                    
                  <Input placeholder="Enter Middle Name" type="text" required onChange={(e)=>{
                  setmName(e.target.value);
                   }} />
    </div>
    <div class="col-sm">
    <label for = "lastName"><h5>Last Name</h5></label>
                  
                    
                  <Input placeholder="Enter Last Name" type="text" required onChange={(e)=>{
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
                  
                    
                  <textarea placeholder="Enter Address" type="text" required onChange={(e)=>{
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
                 
                    
                    <Input placeholder="Enter Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title = "Enter a valid email" required
                    onChange={(e)=>{
                    setEmail(e.target.value);
                     }}/>
    </div>
      
    <div class="col-sm">
    <label for = "mobileNumber"><h5>Mobile Number</h5></label>
                 
                 <Input placeholder="Enter Mobile Number" type="text" pattern = "[0-9]{10}" title = "Enter a 10 digit phone number starting with 0"  required onChange={(e)=>{
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
                  
                    
                  <Input placeholder="Enter NIC" type="text" 
                   onChange={(e)=>{
                  setNic(e.target.value);
                   }}/>
    </div>
    <div class="col-sm">
    <label for ="dob"><h5>Date of Birth</h5></label>
                
                    
                <Input placeholder="Enter Date of Birth" type="Date" onChange={(e)=>{
                setDob(e.target.value);
                 }}/>
              
    </div>
     
    
    <div class="col-sm">
    <label for ="gender"><h5> Gender</h5></label>
                
                    
                <Input placeholder="Select Gender" type="text" onChange={(e)=>{
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
                
                    
                <Input placeholder="Enter Comapany ID" type="text" onChange={(e)=>{
                setCid(e.target.value);
                 }}/>
    </div>
     
  <div class="col-sm">
    <label for ="balance"><h5>Balance</h5></label>
                
                    
                <Input placeholder="Enter Balance" type="text" onChange={(e)=>{
                setBalance(e.target.value);
                 }}/>
              
    </div>
   
    <div class="col-sm">
     
     <label for ="addedBy"><h5>Added By</h5></label>
               
                   
               <Input placeholder="Enter Adding Person" type="text" onChange={(e)=>{
               setAddBy(e.target.value);
                }}/>
   </div>
  </div>
</div> 






                 
                

                <label for ="addedBy"><h5>Added By</h5></label>
                

                
                  

              

              

                
              


              


                     <br/>
                 
                  <center>
                  <button type="submit" className="btn btn-primary">Add Customer</button>
                  </center>
                </form>
                </Container>
                
            
             
        
         
       
      </div>
  
    </>
  );
}


