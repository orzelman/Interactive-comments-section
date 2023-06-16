import React from "react";
import Counter from "./Counter";
import CommentContent from "./CommentContent";
import CommentFooter from "./CommentFooter";
import Reply from "./Reply";

export default function Comment(props) {
    return(
    <div className="comment">
        <CommentContent comment={props.comment} user={props.user}/>
        <CommentFooter comment={props.comment}/>

    </div>)
}