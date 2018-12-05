import React, { Component } from 'react'
import CommentCard from './CommentCard'

 export default class ChatArea extends Component {


renderComments = () => 
this.props.userComments.map(commentObj => <CommentCard commentObj={commentObj} />)




render() {
    // console.log(this.state.userComments.map(c => c))
        return (
            <div className="comment-area">
                <h3 class="ui header">Chat Room</h3>
                <div class="ui raised segment">
                    <div className="chat-box-area">
                     {this.renderComments()}
                    </div>
                </div>
    
            </div>
        )
   }
}

