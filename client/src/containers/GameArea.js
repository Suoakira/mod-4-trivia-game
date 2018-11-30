import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import GameImage from '../components/GameImage'
import RevealTile from '../components/RevealTile'


import { Button, Progress } from 'semantic-ui-react'


export default class GameArea extends Component {
    
    state = { percent: 80 }

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })

  render() {
    return (
        <Grid>
    {/* main body */}
    <Grid.Column width={13}>

       <div class="ui three column grid">
      <div class="column">
      <RevealTile />

      </div>
      <div class="column">
      <RevealTile />

      </div>
      <div class="column">
      <RevealTile />

      </div>
    </div>
    <div class="ui three column grid">
    <div class="column">
    <RevealTile />

    </div>
    <div class="column">
    <RevealTile />

    </div>
    <div class="column">
    <RevealTile />

    </div>
</div>

    </Grid.Column>

    {/* sidebar */}
    <Grid.Column width={3}>

      <GameImage /><br></br>
      <GameImage /><br></br>
      <GameImage />

    </Grid.Column>
  </Grid>
 
    )
  }
}

    //   <div>
    //     <Progress percent={this.state.percent} indicating />
    //     <Button onClick={this.increment}>Start</Button>
    //     <GameImage />
    //     <RevealTile />
      
    //   </div>