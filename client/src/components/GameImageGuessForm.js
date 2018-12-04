import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
export default class GameImageGuessForm extends Component {

    constructor() {
        super()
        this.state = {
            userInput: '',
            toggleFalseModal: true

        }
    }


    userGuess = userInput => {
        if (userInput === this.props.correctAnswer) {
            // place holder toggle for app, if they get the correct answer render the leader bored
            this.props.toggleCatchPhrase()
            console.log('Correct!');
        } else {
            console.log('Wrong');
            this.props.points("notcatchphrase")
            this.props.toggleForm()
            this.props.disableAllButtons()
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
                <input value={this.state.name} fluid label="Name" placeholder="You got this..." name="userInput" onChange={handleChange}/>
                </Form.Field>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
  }
}