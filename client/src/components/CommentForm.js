import React, { Component } from 'react'
import { Form, Button, Container } from 'semantic-ui-react'

import ChatArea from './ChatArea'


export default class CommentForm extends Component {



  state = {
    userComment: '',
  }


  handleSubmit = () => {

    const newComment = {
        comment: this.state.userComment,
        user_id: this.props.currentUser.id
    }

    fetch(`http://localhost:3000/api/v1/comments`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment: newComment})
    })
    .then(resp => resp.json())
    .then(data => this.props.addComment(data))
    
    this.resetForm()
  }

  resetForm = () => {
    this.setState({userComment: ''})
  }

  updateScroll = () => {
    const element = document.querySelector(".chat-box-area")
    element.scrollTop = element.scrollHeight
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

 
  
  render() {
    const { handleChange, handleSubmit } = this
    return (
      <div>
      <Container>
      <p>{this.state.renderComment}</p>
      </Container>
       
       <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label></label>
            <input value={this.state.userComment} fluid label="Name" placeholder="Comment" name="userComment" onChange={handleChange}/>
          </Form.Field>
          <Button content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>
        
      </div>
    )
  }
}
