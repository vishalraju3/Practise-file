// import react from "react";
import React, { Component } from 'react';
import DataService from "./DataService";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      employees:[]
    }
DataService.listEmployees();
    }
    render(){
      return (
        <div className="App">
       {this.state.employees.map(employee=><span>{employee.EmployeeName}</span>)}
 
    
  
        </div>
      );

    }


}

export default App;
