import React, { Component } from 'react'
import { Form, Button, Modal, Image, Header } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
    username: '',
    modal: true,
  }



  handleSubmit = () => {
    fetch('http://localhost:3000/api/v1/users', {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: this.state.username })
    })
    .then(resp => resp.json())
    .then(data => this.props.getCurrentUser(data))
    this.resetForm()
    console.log('clicked')
    this.handleClose()
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  resetForm = () => {
    this.setState({username: ''})
  }

  handleClose = () => {
    this.setState({modal: false})
  }

  render() {
    const { name, modal } = this.state
    const { handleChange, handleSubmit, handleClose } = this

    return (
        <Modal open={modal} closeOnDimmerClick={false}>
        <Modal.Header className='sign-up-form header'>Sign Up</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header></Header>
              <Form onSubmit={handleSubmit}>
                <Form.Input className='sign-up-form' placeholder='Name' name='username' value={name} onChange={handleChange} />
                <Form.Button>Submit</Form.Button>
              </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default SignUp

