import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import GameImage from '../components/GameImage'
import RevealTile from '../components/RevealTile'
import GameTile from "../components/GameTile"



import { Button, Progress } from 'semantic-ui-react'


export default class GameArea extends Component {
    


    quizQuestionsMap = (questions, handleClick) => 
      questions.map(question => <GameTile question={question} handleTileClick={handleClick}  />)


  render() {
    const { quizQuestions, handleTileClick } = this.props
    
    return (

      <div className="container" >
        {
            this.quizQuestionsMap(quizQuestions, handleTileClick)
        }
      </div>
  


  //   <Grid>
  //       {/* main body */}
  //       <Grid.Column width={13}>

  //       <div class="ui three column grid">
  //       <div class="column">
  //       <RevealTile />

  //       </div>
  //       <div class="column">
  //       <RevealTile />


  //       </div>
  //       <div class="column">
  //       <RevealTile />

  //       </div>
  //       </div>
  //       <div class="ui three column grid">
  //       <div class="column">
  //       <RevealTile />

  //       </div>
  //       <div class="column">
  //       <RevealTile />

  //       </div>
  //       <div class="column">
  //       <RevealTile />

  //       </div>
  //   </div>

  //       </Grid.Column>

  //       <Grid.Column width={3}>

  //       <GameImage /><br></br>
  //       <GameImage /><br></br>
  //       <GameImage />


  //       </Grid.Column>
  // </Grid>
 
    )
  }
}

  