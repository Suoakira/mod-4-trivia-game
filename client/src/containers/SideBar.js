import React from 'react'
import ChatArea from '../components/ChatArea'
import PlayerInfo from '../components/PlayerInfo';

function SideBar(props) {
  return (
    <div>
      <PlayerInfo currentPoints={props.currentPoints} />
      <br></br>
      <ChatArea />
    </div>
  )
}

export default SideBar
