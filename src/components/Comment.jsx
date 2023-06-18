import React from "react";
import CommentContent from "./CommentContent";
import CommentFooter from "./CommentFooter";
import ReplyWindow from "./ReplyWindow";

export default function Comment(props) {
    console.log(props.user)
    return(
    <div className="comment">
        <CommentContent comment={props.comment} user={props.user}/>
        <CommentFooter comment={props.comment}/>
        <ReplyWindow comment={props.comment} user={props.user}/>
    </div>)
}