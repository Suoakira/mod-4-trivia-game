import React, { Component } from 'react';
import Timer from './Timer'
import { Button, Header, Image, Modal, Icon, Progress } from 'semantic-ui-react'

// import Popup from "reactjs-popup"
    let randomArray =  undefined

class GameTile extends Component {

    state = {
        timerHitZero: false
    }

 

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    randomQuestions = () => {
        const arrayOfAnswers = [this.props.question.incorrect_answers[0], this.props.question.incorrect_answers[1], this.props.question.incorrect_answers[2], this.props.question.correct_answer]
        return randomArray = this.shuffle(arrayOfAnswers)
    }

    setTimerHitZero = () => {
        this.setState({
            timerHitZero: true
        })
    }

    render() {
        const { setTimerHitZero } = this
        
        this.randomQuestions()
    return (
        
        this.state.timerHitZero ? 

            <div>
                <Modal>
                    <Modal.Header>
                        <div>
                            <p>Times Up, next player</p>
                        </div>
                    </Modal.Header>
                </Modal>
            </div>
            :
            <div>
                <Modal
                    trigger={<Button>
                        <div className="box">
                            {this.props.question.category}
                        </div>        
                        </Button>}>

                    <Modal.Header>
                        {this.props.question.category}
                    
                    </Modal.Header>
                    <Modal.Content>
                        {this.props.question.question}
                    </Modal.Content>
                    <div className="answer-buttons">
                    <Modal.Actions>
                        <Button primary>
                            A: {randomArray[0]}<br></br>
                        </Button>
                        <Button primary>
                            B: {randomArray[1]}<br></br>
                        </Button>
                        <Button primary>
                            C: {randomArray[2]}<br></br>
                        </Button>
                        <Button primary>
                            D: {randomArray[3]}<br></br>
                        </Button>
                    </Modal.Actions>
                    </div>
                    <Timer setTimerHitZero={setTimerHitZero} />
                </Modal>
            </div>
        
        )
    }
}
 
export default GameTile