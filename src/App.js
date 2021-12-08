import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('employees.json')
      .then(response => {
        setEmployees(response.data.employees)
        //console.log(response.data.employees)
      })
  }, [])

  const employeeItems = employees.map( (employee, index) => 
    <Employee key={index} employee={employee}/>
  );

  function Employee(props) {
    return(
      <div className="Employee"> 
        <img src={props.employee.image} alt="pic"></img>
        <p><strong>{props.employee.lastName} {props.employee.firstName}</strong></p>
        <ul className="info">
          <li>{props.employee.department} @ {props.employee.title}</li>
          <li>{props.employee.email}</li>
          <li>{props.employee.phone}</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="App">
      {employeeItems}
    </div>
  );
}

export default App;
