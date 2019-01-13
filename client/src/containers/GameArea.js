import React, { Component } from 'react'
import { Grid, Header, Image, Icon } from 'semantic-ui-react'
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
      case 'italy':
      this.city = 'game-img-1'
      break
      case 'australia':
      this.city = 'game-img-2'
      break
      case 'egypt':
      this.city = 'game-img-3'
      break
      case 'china':
      this.city = 'game-img-4'
      break
      case 'france':
      this.city = 'game-img-5'
      break
      default: 
      this.city = 'game-img-default'
    }
  }

  toggleForm = () =>
    this.setState({
        toggleForm: !this.state.toggleForm
    })

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

    const { quizQuestions, handleTileClick, currentPoints, correctAnswer, catchPhrase, toggleCatchPhrase, currentUser, toggleLeaderboard, updateScore } = this.props


    return (


    <React.Fragment>
    <Grid centered>
        <Grid.Row columns={1}>
          <Grid.Column width={9}>
            <div className="game-image-form">
              <GameImageGuessForm
                updateScore={updateScore} 
                correctAnswer={correctAnswer}
                points={this.props.questionPoints} 
                toggleForm={this.toggleForm} 
                disableAllButtons={this.disableAllButtons} 
                catchPhrase={catchPhrase}
                toggleCatchPhrase={toggleCatchPhrase}
                toggleFormState={this.state.toggleForm}
                currentUser={currentUser}
                currentPoints={currentPoints}
                toggleLeaderboard={toggleLeaderboard}
                />
                </div>
              </Grid.Column>
          </Grid.Row>
          </Grid>
          <Grid centered>
          <Grid.Row columns={2}>
            <div id="game-image" className={this.city}>
            <Grid.Column width={9}>
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column className="noPadding" >
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[0]}
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[1]}
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[2]}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[3]}
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[4]}
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[5]}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[6]}
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[7]}
                  </Grid.Column>
                  <Grid.Column className="noPadding">
                    {this.quizQuestionsMap(quizQuestions, handleTileClick)[8]}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            </div>
          
              <Grid.Column width={4}>
              <div className="padding-left">
                <SideBar currentPoints={currentPoints} currentUser={currentUser} />
                </div>
              </Grid.Column>
       
          </Grid.Row>

      </Grid>
  </React.Fragment>

    )
  }
}