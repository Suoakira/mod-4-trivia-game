import React, { Component } from 'react';
import Timer from './Timer'
import { Button, Header, Image, Modal, Icon, Progress } from 'semantic-ui-react'

// import Popup from "reactjs-popup"
    


class GameTile extends Component {
    
    state = {
   
    }

    // ====================== close an open Modal=======================================
    close = () =>
        this.setState({ showModal: false,
                        showModalCorrect: false
        })

    

    open = () =>
        this.setState({ showModal: true })
    

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
        this.close()
        this.setState({
            questionCategory: this.props.question.category,
            mainQuestion: this.props.question.question,
            answerA: this.props.question.incorrect_answers[0],
            answerB: this.props.question.incorrect_answers[1],
            answerC: this.props.question.incorrect_answers[2],
            answerD: this.props.question.correct_answer,
            correctAnswerGiven: false,
            timesUp: false,
            showModalCorrect: true
        }) 
    }

    setTimerHitZero = () => {
        this.setState({
            timesUp: true,
            questionCategory: "Oh No!You Failed To Guess In Time!",
        })
    }

    handleAnswerButton = (answer) => {
    switch (answer) {

        case this.state.correctAnswer: 
                this.setState({
                questionCategory: "Correct! Now Have a guess!",
                correctAnswerGiven: true
            })
            
        break
        default:
            {
            this.setState({
                timesUp: true,
                questionCategory: "Thats the Wrong Answer. Try Again!",
                
            })
            }
        }
     }

    // ====================== game begins ===========================
    componentWillMount() {


        
        this.setState({
            questionCategory: this.props.question.category,
            mainQuestion: this.props.question.question,
            answerA: this.props.question.incorrect_answers[0],
            answerB: this.props.question.incorrect_answers[1],
            answerC: this.props.question.incorrect_answers[2],
            answerD: this.props.question.correct_answer,
            correctAnswer: this.props.question.correct_answer,
            timesUp: false,
            showModal: false,
            timerHitZero: false,
            correctAnswerGiven: false,
            onClose: false,
            showModalCorrect: true
        })
    }
    

    render() {
     
        const { setTimerHitZero, handleAnswerButton } = this
        const { question } = this.props
        const { mainQuestion, questionCategory, answerA, answerB, answerC, answerD, correctAnswer } = this.state
        const randomAnswerArray = [answerA, answerB, answerC, answerD]
        this.shuffle(randomAnswerArray)
        
    return (
        <div>
        {
        this.state.correctAnswerGiven ?
            <div>
                <Modal
                    closeOnDimmerClick={false} 
                    open={this.state.showModalCorrect}
                    onClose={this.close}
                    >

                    <Modal.Header >
                        {questionCategory}
                    </Modal.Header>
                    <Modal.Actions>
                    <Button primary onClick={() => this.close()} >
                            Close
                    </Button>
                    </Modal.Actions>
                </Modal>            
            </div>
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
                        
                    {
                        this.state.timesUp ?
                    <div>   
                        <Modal.Actions>
                                <Button primary onClick={() => this.handleTimerUp()} >
                                Close
                            </Button>
                        </Modal.Actions>
                    </div>
                    :
                    <div>
                        <Modal.Content>
                            <br></br>
                                {mainQuestion}
                        </Modal.Content>
                        <div className="answer-buttons">
                            <Modal.Actions>
                                <Button primary onClick={() => handleAnswerButton(randomAnswerArray[0])}>
                                    A: {randomAnswerArray[0]}<br></br>
                                </Button>
                                <Button primary onClick={() => handleAnswerButton(randomAnswerArray[1])}>
                                    B: {randomAnswerArray[1]}<br></br>
                                </Button>
                                <Button primary onClick={() => handleAnswerButton(randomAnswerArray[2])}>
                                    C: {randomAnswerArray[2]}<br></br>
                                </Button>
                                <Button primary onClick={() => handleAnswerButton(randomAnswerArray[3])}>
                                    D: {randomAnswerArray[3]}<br></br>
                                </Button>
                            </Modal.Actions>
                        </div>
                        <Timer setTimerHitZero={setTimerHitZero} />
                    </div>
                    }
                </Modal>
            </div>
        }
    </div>
        )
    }
}
 
export default GameTile

