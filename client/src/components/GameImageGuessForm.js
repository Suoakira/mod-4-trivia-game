import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
export default class GameImageGuessForm extends Component {

    state = {
        userInput: '',
        showOutcome: false,
        correctness: undefined,
        toggleFalseModal: true

    }


    userGuess = userInput => {
        // this.setState({showOutcome: true})
        if (userInput === this.props.correctAnswer) {
            // place holder toggle for app, if they get the correct answer render the leader bored
            this.props.toggleCatchPhrase()
            console.log('Correct!');

            // this.setState({correctness: true})

        } else {
            console.log('Wrong');
            //Deduct points
            //Next turn
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.userGuess(this.state.userInput)
    }








  render() {
      const { toggleFalseModal } = this.state
      const { handleChange, handleSubmit, close } = this
    return (
        <div>
  
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <label>Enter you guess</label>
      <input value={this.state.userInput} fluid label="Name" placeholder="You got this..." name="userInput" onChange={handleChange}/>
    </Form.Field>
    <Form.Button>Submit</Form.Button>
  </Form>
  {/* {this.state.showOutcome && <div>{this.state.correctness ? 'CORRECT' : 'INCORRECT'}</div>} */}

    )
  }
}
