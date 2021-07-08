import React, { Component } from "react";
import axios from "axios";

export class DisplayEmp extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      emp: []
    };
  }

//   getEmpData = (e) => {
//     e.preventDefault();

//     axios
//       .get("http://127.0.0.1:5000/display")
//       .then((data) => {
//         let a = data["data"]["emp"];
//         this.setState({ emp: a });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  componentDidMount=()=>{
    axios
      .get("http://127.0.0.1:5000/display")
      .then((data) => {
        let a = data["data"]["emp"];
        this.setState({ emp: a });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.val!== this.props.val){
      this.setState({
        emp: [...this.state.emp,this.props.val]
      })
    }
  }
  
  render() {
   //console.log(this.state.val)
    return (
      <div className="displayData">
         <h1> {this.props.e}</h1>
        {/* <button onClick={this.getEmpData}>click</button> */}
        <table>
          <tbody>
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company Name</th>
            </tr>
            
              {this.state.emp.map((val) => {
                return <tr key={val._id}>
                  <td>{val._id}</td>
                 <td>{val.name}</td> 
                 <td>{val.email}</td> 
                 <td>{val.address}</td>
                 <td>{val.companyName}</td></tr>;
              })}
            
           
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayEmp;
