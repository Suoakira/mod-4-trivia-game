import React from 'react'
import { Segment } from 'semantic-ui-react';

export default function CommentCard(props) {
  return (
    <div style={{ color: 'black' }}>

        {props.commentObj.user.username}: {props.commentObj.comment}
     
    </div>
  )
}

