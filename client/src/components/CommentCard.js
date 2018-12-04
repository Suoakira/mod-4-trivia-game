import React from 'react'

export default function CommentCard(props) {
  return (
    <div>
    <p>{props.commentObj.user.username}</p>
    <p>{props.commentObj.comment}</p>
    </div>
  )
}

