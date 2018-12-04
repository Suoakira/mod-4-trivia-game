import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import GameTile from "../components/GameTile"
import SideBar from '../containers/SideBar'
import GameImageGuessForm from '../components/GameImageGuessForm'




export default class GameArea extends Component {
  
 constructor(props) {
   super(props)
   
   this.city = ''
   this.state = {
     toggleForm: true
   }
 }
 


  changeGameImage = selectedCity => {
    switch (selectedCity) {
      case 'london':
      this.city = 'game-img-1'
      break
      default: 
      this.city = 'game-img-default'
    }
  }

  toggleForm = () =>
    this.setState({
        toggleForm: !this.state.toggleForm
    })


  componentDidMount = () => {
  }

  disableAllButtons = () => {
    if (this.state.toggleForm === true) {
      const quizButtons = document.querySelectorAll("#questionSelect")
      quizButtons.forEach(button => button.className = "ui button disabled")
    } else if (this.state.toggleForm === false) {
      const quizButtons = document.querySelectorAll("#questionSelect")
      quizButtons.forEach(button => button.className = "")
    }
  }
  
  
  
  
  quizQuestionsMap = (questions, handleClick) =>
    questions.map(question => <GameTile question={question} handleTileClick={handleClick} points={this.props.questionPoints} toggleForm={this.toggleForm} disableAllButtons={this.disableAllButtons} />)
  
  
  render() {
    this.changeGameImage(this.props.correctAnswer)

    const { quizQuestions, handleTileClick, currentPoints, correctAnswer, catchPhrase, toggleCatchPhrase, currentUser } = this.props


    return (


    <div>
      

    <Grid >
    
        {/* main body */}
        <Grid.Column width={12}>
        {
          this.state.toggleForm ?
          null
          :
      <div className="game-image-form">
                  <GameImageGuessForm 
                   correctAnswer={correctAnswer}
                   points={this.props.questionPoints} 
                   toggleForm={this.toggleForm} 
                   disableAllButtons={this.disableAllButtons} 
                   catchPhrase={catchPhrase}
                   toggleCatchPhrase={toggleCatchPhrase}
                   />
      </div>

        }

        {/* could flip css class w/ pic via function */}
      <div className={this.city}>

        <div className="ui three column grid">
        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[0]}
        

        </div>
        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[1]}
        


        </div>
        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[2]}

        </div>
        </div>
        <div className="ui three column grid">
        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[3]}

        </div>
        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[4]}
        </div>

        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[5]}
        </div>

        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[6]}
        </div>

        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[7]}
        </div>

        <div className="column">
        {this.quizQuestionsMap(quizQuestions, handleTileClick)[8]}
        </div>
      </div>
    </div>
  </Grid.Column>

        <Grid.Column width={4}>
          <SideBar currentPoints={ currentPoints } currentUser={ currentUser } />
        </Grid.Column>


  </Grid>
  </div>

    )
  }
}