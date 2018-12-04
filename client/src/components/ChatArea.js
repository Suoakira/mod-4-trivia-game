import React, { Component } from 'react'
import CommentForm from './CommentForm'

 export default class ChatArea extends Component {

    state = {
        comments: []
    }


    fetchComments = () => {
        fetch(`http://localhost:3000/api/v1/users/`)
        .then(resp => resp.json())
        .then(data => this.setState({comments: data}))
      }
    
    componentDidMount = () => {
    this.fetchComments()
    }

    getCurrentUserComments = () => {
        this.state.comments.filter(user => this.props.currentUser === user)
    }

   render() { 
       const { comments } = this.state
        return (
            <div>
                <p>
                {
                    console.log(comments)
                }
                </p>
            </div>
        )
   }
}

