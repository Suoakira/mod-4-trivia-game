import React, { Component } from 'react'
import CommentCard from './CommentCard'

 export default class ChatArea extends Component {


renderComments = () => 
this.props.userComments.map(commentObj => <CommentCard commentObj={commentObj} />)




render() {
    // console.log(this.state.userComments.map(c => c))
        return (
            <div className="comment-area">
                <span>Comments</span>
                {this.renderComments()}
    
            </div>
        )
   }
}

