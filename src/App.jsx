import React, { useEffect, useState } from "react";
import EmployeeList from './EmployeeList'
import { Header, Segment, Container } from 'semantic-ui-react'
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get("https://reqres.in/api/users?per_page=5");
    setEmployees(response.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <li id={employee.id} key={employee.id}>
      <EmployeeList employee={employee} />
      </li>
    );
  });

  return (
    <>
    <Container>
    <Segment color = "teal">
      <Header dividing color ="teal" as="h1" data-cy="employee-header">
        List of Employees:
      </Header>
      <ul data-cy="employee-list">{employeeList}</ul>
      </Segment>
    </Container>
    </>
  );
};

export default App;
