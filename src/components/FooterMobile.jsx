import React from 'react'
import Counter from "./Counter"
import IconButtons from './Buttons/IconButtons'

export default function FooterMobile(props) {
    const isAuthor = props.currentUser.username === props.comment.user.username 
    return (
    <div className='footer-mobile'>
        <Counter 
            className="counter-horizontal" 
            comment={props.comment} updateScore={props.updateScore}
        />
        <IconButtons 
            author={isAuthor} 
            comment={props.comment}
            setCurrentReplyWindow={props.setCurrentReplyWindow}
            setCurrentUpdateWindow={props.setCurrentUpdateWindow}
            deleteComment={props.deleteComment}
        />
    </div>
    )

}