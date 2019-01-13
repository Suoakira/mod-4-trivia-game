import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal, Header, Image } from 'semantic-ui-react'
import Leaderboard from './Leaderboard'

export default class MenuExampleSizeMini extends Component {
  state = { 
    activeItem: 'home',
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    
    return (
      <React.Fragment >
        <Leaderboard toggleLeaderboard={this.props.toggleLeaderboard} leaderboardOpen={this.props.leaderboardOpen} catchPhrase={this.props.catchPhrase} />
      <Menu size='mini'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Leaderboard'
          active={activeItem === 'Leaderboard'}
          onClick={this.props.toggleLeaderboard}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            {this.props.currentUser ?
            <Button primary>{this.props.currentUser.username}</Button>
            :
            <Button primary>Sign Up</Button>
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
        <Header as='h2' className="title-header">
        <i class="globe icon"></i>Where On Earth?
        </Header>
    </React.Fragment>

    )
  }
}