import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    setEmployees(response.data.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <li key={employee.id}>
        {employee.first_Name}
        {`${employee.first_name} ${employee.last_name}`}
      </li>
    );
  });

  return (
    <>
      <h1>Employee List</h1>
      <ul data-cy="employee-list">{employeeList}</ul>
    </>
  );
};

export default App;
