import React from 'react'
import { List, Image } from 'semantic-ui-react'
import EmployeeModal from './EmployeeModal'

const EmployeeList = ({ employee }) => {
  return (
    <List>
      <List.Item>
        <Image avatar src={employee.avatar} />
        <List.Content>
          <List.Header>
            {`${employee.first_name} ${employee.last_name}`}
          </List.Header>
          <List.Description>{employee.email}</List.Description>
          <EmployeeModal id={employee.id} />
        </List.Content>
      </List.Item>
    </List>
  )
}

export default EmployeeList
