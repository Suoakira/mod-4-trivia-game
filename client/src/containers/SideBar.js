import React, { Component } from 'react'
import ChatArea from '../components/ChatArea'
import CommentForm from '../components/CommentForm'
import PlayerInfo from '../components/PlayerInfo';

export default class SideBar extends Component {
  state = {
    userComments: []
  }
  
  
  fetchComments = () => {
    fetch(`http://localhost:3000/api/v1/comments/`)
    .then(resp => resp.json())
    .then(data => this.setState({userComments: data}))
  }
  
  componentDidMount = () => {
  this.fetchComments()
  }

  addComment = comment => {
    // const copyArray = [...this.state.userComments]
    this.setState({userComments: [...this.state.userComments, comment]})
  }


  


  render() {
    return (
      <div>
      <PlayerInfo currentPoints={this.props.currentPoints} />
      <br></br>
      <ChatArea currentUser={ this.props.currentUser } userComments={this.state.userComments} />
      <CommentForm currentUser={ this.props.currentUser } addComment={this.addComment} />
    </div>
    )
  }
}





