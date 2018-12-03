import React, { Component } from 'react'
import { Grid, Image, Sidebar } from 'semantic-ui-react'
import GameImage from '../components/GameImage'
import GameTile from "../components/GameTile"
import SideBar from '../containers/SideBar'


import { Button, Progress } from 'semantic-ui-react'


export default class GameArea extends Component {
  
  state = {}



  quizQuestionsMap = (questions, handleClick) =>
    questions.map(question => <GameTile question={question} handleTileClick={handleClick} points={this.props.questionPoints} />)


  render() {
    const { quizQuestions, handleTileClick, currentPoints } = this.props

    return (

      //   <div className="container" >
      //     {
      //         this.quizQuestionsMap(quizQuestions, handleTileClick)
      //     }
      //   </div>



      <Grid>
        {/* main body */}
        <Grid.Column width={12}>
          {/* could flip css class w/ pic via function */}
          <div className="game-area-img">
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
          <SideBar currentPoints={currentPoints}/>
        </Grid.Column>

      </Grid>

    )
  }
}