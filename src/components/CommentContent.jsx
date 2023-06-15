import React from "react";
import CommentTitle from "./CommentTitle";
import CommentText from "./CommentText";

export default function CommentContent(props) {
    return(<div className="comment-content">
        <CommentTitle comment={props.comment} user={props.user} />
        <CommentText comment={props.comment} />
    </div>)
}  