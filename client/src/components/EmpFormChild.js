import React, { Component } from "react";
import "./stylesheet.css";

export class EmpFormChild extends Component {
  render() {
    return (
      <div>
        {this.props.val && (
          <h4 className="displayId">Employee Id : {this.props.val}</h4>
        )}

        {this.props.name && (
            
          <table className="searchTable">
              <caption>Employee Details</caption>
            <tbody>            
                
              <tr>
                <th>Name</th>
                <td>{this.props.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{this.props.email}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{this.props.address}</td>
              </tr>
              <tr>
                <th>Company Name</th>
                <td>{this.props.company}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default EmpFormChild;
