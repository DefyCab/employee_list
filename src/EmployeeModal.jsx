/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Modal, Button, Image, Header } from 'semantic-ui-react'

const EmployeeModal = ({ id }) => {
  const [open, setOpen] = useState(false)
  const [employee, setEmployee] = useState({})

  const getEmployee = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`)
    setEmployee(response.data.data)
  }

  useEffect(() => {
    getEmployee()
  }, [])

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button inverted color="orange" className="view-button">
          Show Modal
        </Button>
      }
    >
      <Modal.Content image data-cy="modal-container">
        <Image size="medium" src={employee.avatar} wrapped />
        <Modal.Description>
          <Header>{`${employee.first_name} ${employee.last_name}`}</Header>
          <p>Email: {employee.email}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button inverted color="red" onClick={() => setOpen(false)}>
          Edit
        </Button>
        <Button onClick={() => setOpen(false)}>Delete</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EmployeeModal
