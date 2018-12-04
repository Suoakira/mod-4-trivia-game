import React from 'react'
import ChatArea from '../components/ChatArea'
import CommentForm from '../components/CommentForm'
import PlayerInfo from '../components/PlayerInfo';

function SideBar (props) {
  return (
    <div>
      <PlayerInfo currentPoints={props.currentPoints} />
      <br></br>
      <ChatArea currentUser={ props.currentUser } />
      <CommentForm currentUser={ props.currentUser } />
    </div>
  )
}

export default SideBar
