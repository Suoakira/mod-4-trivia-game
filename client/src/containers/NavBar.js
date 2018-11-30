import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeMini extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='mini'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Instructions'
          active={activeItem === 'Instructions'}
          onClick={this.handleItemClick}
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
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}