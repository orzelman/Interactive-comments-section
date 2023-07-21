import React from "react";
import Counter from "./Counter";
import ReplyButton from "./Buttons/ReplyButton";

export default function CommentFooter(props) {
    return(
        <div className="comment-footer">
            <Counter 
                comment={props.comment}
                updateScore={props.updateScore}/>
            <ReplyButton />
        </div>
    )
}