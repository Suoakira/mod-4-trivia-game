import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
export default class GameImageGuess extends Component {
    state = {
        userGuess: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        // event.preventDefault()
        console.log('Submit')
    }


  render() {
      const { handleChange, handleSubmit } = this
    return (
        <div>
  
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label>User Input</label>
      <input value={this.state.name} fluid label="Name" placeholder="Name" name="userGuess" onChange={handleChange}/>
    </Form.Field>
    <Form.Button>Submit</Form.Button>
  </Form>

    </div>
    )
  }
}
