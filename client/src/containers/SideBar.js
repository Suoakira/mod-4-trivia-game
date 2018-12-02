import React from 'react'
import ChatArea from '../components/ChatArea'
import PlayerInfo from '../components/PlayerInfo';

function SideBar() {
  return (
    <div>
      <PlayerInfo />
      <br></br>
      <ChatArea />
    </div>
  )
}

export default SideBar
