import React from 'react'
import Counter from "./Counter";
import CommentTitle from './CommentTitle';

export default function UpdateWindow(props) {
    console.log(props)
    return(
        <div className='update-window'>
            <Counter comment={props.comment}/>
            <div className='update-item'>
                <CommentTitle 
                    comment={props.comment}
                    currentUser={props.currentUser}
                    setCurrentReplyWindow={props.setCurrentReplyWindow}
                    setCurrentUpdateWindow={props.setCurrentUpdateWindow}
                    deleteComment={props.deleteComment}
                />
                <textarea className='textarea-reply' placeholder={props.comment.content}/>
            </div>
        </div>
    )
}