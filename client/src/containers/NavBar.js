import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react'
import Leaderboard from './Leaderboard'

export default class MenuExampleSizeMini extends Component {
  state = { 
    activeItem: 'home',
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    
    return (
      <div>
      
        <Leaderboard toggleLeaderboard={this.props.toggleLeaderboard} leaderboardOpen={this.props.leaderboardOpen} catchPhrase={this.props.catchPhrase} />
      
      <Menu size='mini'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Instructions'
          active={activeItem === 'Instructions'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Leaderboard'
          active={activeItem === 'Leaderboard'}
          onClick={this.props.toggleLeaderboard}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>Lalala</Dropdown.Item>
              <Dropdown.Item>Dododo</Dropdown.Item>
              <Dropdown.Item>Dedede</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            {this.props.currentUser ?
            <Button primary>{this.props.currentUser.username}</Button>
            :
            <Button primary>Sign Up</Button>
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
</div>

    )
  }
}