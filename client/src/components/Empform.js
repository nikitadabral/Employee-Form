import React, { useState } from "react";
import axios from "axios";
import EmpFormChild from "./EmpFormChild";
import "./stylesheet.css";
//import DisplayEmp from "./DisplayEmp";


function Empform(props) {
  
  const [emp, setEmp] = useState({
    name: "",
    address: "",
    email: "",
    companyName: "",
  });

  const [id, setId] = useState("");
  
  const changeId=(a)=>{
    setId(a);
   
  }
  const postData = (e) => {
    e.preventDefault();
    if (
      emp.name !== "" &&
      emp.address !== "" &&
      emp.email !== "" &&
      emp.companyName !== ""
    ) {
      axios
        .post("http://127.0.0.1:5000/submit-form", { userData: emp })
        .then((data) => {
          let a = data["data"]["objectId"];
          
          let empArr= {_id: a,name: emp.name, email: emp.email,address:emp.address,companyName: emp.companyName}
         
          
          changeId(a);
          console.log("Id is stored");
          props.parentCallback(empArr);

        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
 
//   const onTrigger = (e) => {
    
//     e.preDefault();
// }
 
  return (
    <div>
      
        <form >
          <p>Employee Form</p>
          <label>Name</label>
          <input
            type="text"
            value={emp.name}
            onChange={(e) => setEmp({ ...emp, name: e.target.value })}
            placeholder="Enter Name"
          />

          <label>Address</label>
          <input
            type="text"
            value={emp.address}
            onChange={(e) => setEmp({ ...emp, address: e.target.value })}
            placeholder="Enter Address"
          />

          <label>Email</label>
          <input
            type="text"
            value={emp.email}
            onChange={(e) => setEmp({ ...emp, email: e.target.value })}
            placeholder="Enter Email"
          />

          <label>Company Name</label>
          <input
            type="text"
            value={emp.companyName}
            onChange={(e) => setEmp({ ...emp, companyName: e.target.value })}
            placeholder="Enter Company Name"
          />

          <button className="btn1" onClick={postData}>
            Submit
          </button>
           
           
           <EmpFormChild val={id} />
 
            
           
          {/* {JSON.stringify(emp)} */}
        </form>
      
    </div>
  );
}



export default Empform;
