import React, { Component } from 'react'
import { Button, Dropdown, Menu, Modal } from 'semantic-ui-react'
import Leaderboard from './Leaderboard'

export default class MenuExampleSizeMini extends Component {
  state = { 
    activeItem: 'home',
    leaderboardOpen: false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggleLeaderboard = () => {
    this.setState({
      leaderboardOpen: !this.state.leaderboardOpen
    })
    // console.log('leaderboard')
  }

  onClickLeaderboard = () => {
    // this.handleItemClick()
    // this.openLeaderboard()
    
  }
  
  render() {
    const { activeItem } = this.state
    
    return (
      <div>
      
      <Leaderboard toggleLeaderboard={this.toggleLeaderboard} leaderboardOpen={this.state.leaderboardOpen} />
      
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
          onClick={this.toggleLeaderboard}
          
          
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