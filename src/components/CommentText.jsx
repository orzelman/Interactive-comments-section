import React from "react";

export default function CommentText(props) {
    return(
        <div className="comment-text">
            <p>{props.comment.content}</p>
        </div>
    )
}