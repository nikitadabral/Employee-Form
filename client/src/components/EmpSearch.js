import axios from 'axios'
import React, { Component } from 'react'
import EmpFormChild from './EmpFormChild'
import './stylesheet.css'

export class EmpSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: "",
             name:"",
             address:"",
             email:"",
             company:""
        }
    }
    changeId=(e)=>{
        this.setState({
            id: e.target.value
        })
    }

    empDetails=(name,address,email,company)=>{
        this.setState({
           
            name: name,
            address: address,
            email:email,
            company:company
        })
    }
    

    getData = (e) =>{
        e.preventDefault()
        
        axios.post("http://127.0.0.1:5000/search",{userId : this.state.id})
        .then((data)=>{
            
            let name=data["data"]["fetchData"]["name"];
            let address=data["data"]["fetchData"]["address"];
            let email=data["data"]["fetchData"]["email"];
            let company=data["data"]["fetchData"]["companyName"];
            this.empDetails(name,address,email,company);
            console.log("Data is fetched")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        
        return (
            <div >
                <form>
                <p>Search Employee</p>
                <label>Employee ID</label>
                <input type="text" value={this.state.id} placeholder="Search Employee" onChange={(e)=>this.changeId(e)}/>
                <button className="btn1" onClick={this.getData}>Search</button>
                <EmpFormChild 
                
                name={this.state.name} 
                email={this.state.email}
                address={this.state.address}
                company={this.state.company} />
                </form>
            </div>
        )
    }
}

export default EmpSearch
