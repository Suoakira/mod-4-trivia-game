import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'

 export default class ChatArea extends Component {

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

    renderComments = () => 
        this.state.userComments.map(comments => <Comments comments={comments} />)
    

   render() { 
    // console.log(this.state.userComments.map(c => c.comment))
        return (
            <div className="comment-area">
                <span>Comments</span>
                {/* <Comments /> */}
            </div>
        )
   }
}

