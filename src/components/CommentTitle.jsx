import React from "react";
import IconButtons from "./Buttons/IconButtons";
import YouButton from "./Buttons/YouButton";

export default function CommentTitle(props) {
    const isAuthor = props.currentUser.username === props.comment.user.username
    return(
        <div className="comment-title">
            <div className="comment-title-item">
                <img className="avatar" src={props.comment.user.image.png} alt="avatar"></img>
                <p className="current-user">{props.comment.user.username}</p>
                {isAuthor? <YouButton /> : ""}
                <p className="created-at">{props.comment.createdAt}</p>
            </div>
            <div className="comment-title-item">
                {(!props.isMobileDesign)? 
                <IconButtons 
                    author={isAuthor} 
                    comment={props.comment}
                    setCurrentReplyWindow={props.setCurrentReplyWindow}
                    setCurrentUpdateWindow={props.setCurrentUpdateWindow}
                    deleteComment={props.deleteComment}
                    />
                :
                ''
                }
            </div>
        </div>
    )
}