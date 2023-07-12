import React from "react";
import CommentTitle from "./CommentTitle";
import CommentText from "./CommentText";

export default function CommentContent(props) {

    return(<div className="comment-content">
        <CommentTitle 
            comment={props.comment}
            currentUser={props.currentUser}
            setCurrentReplyWindow={props.setCurrentReplyWindow}
            />
        <CommentText comment={props.comment} />
    </div>)
}  