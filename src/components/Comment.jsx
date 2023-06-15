import React from "react";
import Counter from "./Counter";
import CommentContent from "./CommentContent";
import CommentFooter from "./CommentFooter";

export default function Comment(props) {
    return(
    <div className="comment">
        <Counter />
        <CommentContent comment={props.comment} user={props.user}/>
        <CommentFooter comment={props.comment}/>
    </div>)
}