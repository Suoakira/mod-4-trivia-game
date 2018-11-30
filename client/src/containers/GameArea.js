import React, { Component } from 'react'
import GameImage from '../components/GameImage'
import RevealTile from '../components/RevealTile'


import { Button, Progress } from 'semantic-ui-react'


export default class GameArea extends Component {
    
    state = { percent: 33 }

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Start</Button>
        <GameImage />
        <RevealTile />
      </div>
    )
  }
}
