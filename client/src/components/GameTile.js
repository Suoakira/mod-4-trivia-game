import React, { Component } from 'react';
import Timer from './Timer'
import { Button, Header, Image, Modal, Icon, Progress } from 'semantic-ui-react'

// import Popup from "reactjs-popup"
    


class GameTile extends Component {

    constructor(props) {
        super(props)
        this.randomAnswerArray = this.shuffle([this.props.question.incorrect_answers[0],
            this.props.question.incorrect_answers[1],
            this.props.question.incorrect_answers[2],
            this.props.question.correct_answer])

        this.defaultSettings = {
            questionCategory: this.props.question.category,
            mainQuestion: this.props.question.question,
            answerA: this.randomAnswerArray[0],
            answerB: this.randomAnswerArray[1],
            answerC: this.randomAnswerArray[2],
            answerD: this.randomAnswerArray[3],
            correctAnswer: this.props.question.correct_answer,
            timesUp: false,
            showModal: false,
            correctAnswerGiven: false,
            buttonClass: "ui button primary",
            displayTile: false,
            answerSubmit: true
        }
        this.state = {}
        }

    // ====================== close an open Modal=======================================

    close = () =>
        this.setState( this.defaultSettings, 
            )

    open = () =>
        this.setState({ showModal: true })


    correctClose = () => 
        this.setState({ 
            displayTile: true,
            correctAnswerGiven: true
         })
    
    

    // ======================  shuffle answers so random ===============================

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // ======================= Game Logic ==============================================

    handleTimerUp = () => {
        this.wrongAnswerGiven()
    }

    wrongAnswerGiven = () => {
        this.setState({
            questionCategory: "Incorrect",
            mainQuestion: "Try another Topic? If your finding this one tough!"

        })
    }

    setTimerHitZero = () => {
        this.setState({
            timesUp: true,
            questionCategory: "Try another Topic?",
            mainQuestion: "Try another Topic? If your finding this one tough!"
        })
    }

    // iterates through dom, and changes colors of buttons
    domManipulator = (notThisClass, event) => event.target.parentNode.querySelectorAll("button").forEach(button =>
        button.className !== notThisClass ?
            button.className = "ui button primary disabled"
            :
            null)

    handleAnswerButton = (answer, event) => {


        if (answer === this.state.correctAnswer) {

            this.setState({
                questionCategory: "Correct",
                mainQuestion: "Well done! Now see if you can guess what the catchphrase is behind the tiles!",
                correctAnswerGiven: true,
                answerSubmit: false
            
            })
            event.target.className = "ui button positive disabled" 
            this.domManipulator("ui button positive disabled", event)
       

        } else { 
            this.setState({
                questionCategory: "Incorrect",
                mainQuestion: "Try another topic, if your finding this one to hard!",
                answerSubmit: false
            })  
            event.target.className = "ui button negative disabled"  

            this.domManipulator("ui button negative disabled", event)
 
        }
    }
     
    // ====================== game begins ===========================

    componentWillMount() {
        this.setState(this.defaultSettings)
    }
    
    render() {
     
        const { setTimerHitZero, handleAnswerButton, close, correctClose } = this
        const { mainQuestion, questionCategory, buttonClass, answerA, answerB, answerC, answerD } = this.state
        
        
        
    return (
        <div>
            {
            this.state.displayTile ?

            null
            :
            <div className="quiz-box">
                <button onClick={() => this.open()}>
                    <div className="quiz-box">
                        {questionCategory}
                    </div>
                </button>
                
                <Modal
                    closeOnDimmerClick={false} 
                    open={this.state.showModal}
                    onClose={this.close}
                   >

                    <Modal.Header >
                        {questionCategory}
                    </Modal.Header>
                        
                    <div>
                        <Modal.Content>
                            <br></br>
                                {mainQuestion}
                        </Modal.Content>
                        <div className="answer-buttons">

                            
                            { this.state.timesUp ?
                        <Modal.Actions>
                            <Button className="ui teal" onClick={() => close()}>
                                Close<br></br>
                            </Button>
                        </Modal.Actions>
    
                                :
                        <Modal.Actions>
                            <Button className={buttonClass} onClick={(event) => handleAnswerButton(answerA, event)}>
                                A: {answerA}<br></br>
                            </Button>
                            <Button className={buttonClass} onClick={(event) => handleAnswerButton(answerB, event)}>
                                B: {answerB}<br></br>
                            </Button>
                            <Button className={buttonClass} onClick={(event) => handleAnswerButton(answerC, event)}>
                                C: {answerC}<br></br>
                            </Button>
                            <Button className={buttonClass} onClick={(event) => handleAnswerButton(answerD, event)}>
                                D: {answerD}<br></br>
                            </Button>
                        </Modal.Actions>
                            }
                            
                            <div>
                                {
                                    <div>
                                        {
                                        this.state.answerSubmit ?
                                        null
                                        :
                                    this.state.correctAnswerGiven ?
                                    
                                    <Modal.Actions>
                                        <br></br>
                                        <Button className="ui teal" onClick={() => correctClose()}>
                                            Close
                                        </Button>
                                       
                                    </Modal.Actions>
                                    :
                                    <Modal.Actions>
                                        <br></br>
                                       <Button className="ui teal" onClick={() => close()}>
                                            Close
                                       </Button>
                                    </Modal.Actions>

                                        }
                                    </div>

                                }
                            </div>      

                        </div>
                        <Timer setTimerHitZero={setTimerHitZero} />
                    </div>
                    
                </Modal>
            </div>
            }
        
    </div>
        )
    }
}
 
export default GameTile

