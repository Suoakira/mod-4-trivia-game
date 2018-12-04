import React from 'react'

export default function CommentCard(props) {
  return (
    <div>
      <p>{props.commentObj.user.username}: {props.commentObj.comment}</p>

    </div>
  )
}

