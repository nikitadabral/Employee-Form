import "./App.css";
import Empform from "./components/Empform";
import EmpSearch from "./components/EmpSearch";
import DisplayEmp from "./components/DisplayEmp";

//import { useState } from 'react';

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: {},
    };
  }

  handleCallback = (empArr) => {
    this.setState({ arr: empArr });
  };

  render() {
    console.log(this.state.arr);
    return (
      <div className="App">
        <div className="col1">
          <Empform parentCallback={this.handleCallback} />
          <EmpSearch />
        </div>

        <DisplayEmp val={this.state.arr} />
      </div>
    );
  }
}

export default App;
