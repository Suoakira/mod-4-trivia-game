import React, { Component } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
export default class GameImageGuessForm extends Component {

    constructor() {
        super()
        this.state = {
            userInput: '',
            toggleFalseModal: true,
            open: true, 
            toggleIncorrect: true

        }
    }

    toggleIncorrect = () => 
        this.setState({toggleIncorrect: !this.state.toggleIncorrect})


    userGuess = userInput => {
        if (userInput === this.props.correctAnswer) {
            // place holder toggle for app, if they get the correct answer render the leader bored
            this.props.toggleCatchPhrase()
            // post scores then render scores
            this.props.toggleLeaderboard()
            this.postScores()
            
            console.log('Correct!');
        } else {
            console.log('Wrong');
            this.props.points("notcatchphrase")
            this.props.toggleForm()
            this.props.disableAllButtons()
            this.toggleIncorrect() 
        
        }
    }

    postScores = () => {
        const newScore = {

            score: this.props.currentPoints()[0] + this.props.currentPoints()[1],
            user_id: this.props.currentUser.id
        }

        fetch(`http://localhost:3000/api/v1/scores`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ score: newScore })
        }).then(resp => resp.json())
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.userGuess(this.state.userInput)
        this.setState({ open: true })
    }

    close = () => { 
        this.setState({ open: false })
        this.toggleIncorrect()
  
    }
    

  render() {
      const { toggleFalseModal } = this.state
      const { handleChange, handleSubmit, close } = this
    return (
        <div>
            {this.props.toggleFormState ? 
            null
            :

            <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label>Enter you guess</label>
                <input value={this.state.name} fluid label="Name" placeholder="You got this..." name="userInput" onChange={handleChange}/>
                </Form.Field>
                <Form.Button color='green' className="game-image-guess-button">Submit</Form.Button>
            </Form>
            }


            {
                this.state.toggleIncorrect?
                null
                :
        <div>
            <Modal size="small" open={this.state.open}>
                <Modal.Header>Incorrect!</Modal.Header>
                <Modal.Content>
                    <p>Country Guess Worth: -100 points!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="incorrect-button" onClick={() => close()}negative>Close</Button>
                </Modal.Actions>
            </Modal>
        </div>

            }


        </div>
    )
  }
}