import React from "react";
import Comment from "./Comment";
import ReplyWindow from "./ReplyWindow";

export default function Reply(props) {
    return(
        <div className="reply">
            <div className="side-line"/>
            <div>
                <Comment 
                    comment={props.comment}
                    currentUser={props.currentUser}
                    setCurrentReplyWindow={props.setCurrentReplyWindow}
                    deleteComment={props.deleteComment}
                    />
                {props.currentReplyWindow===props.comment.id? 
                <ReplyWindow 
                    currentUser={props.currentUser}
                    addComment={props.addComment}
                    comment={props.comment} 
                />
                : ""}
            </div>
        </div>
    )
}