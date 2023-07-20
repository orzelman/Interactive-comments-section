import React from "react";
import Comment from "./Comment";
import ReplyWindow from "./ReplyWindow";

export default function Reply(props) {
    return(
        <div className="reply">
            <div className="side-line"/>
            <div style={{width: "100%"}}>
                <Comment 
                    comment={props.comment}
                    currentUser={props.currentUser}
                    setCurrentReplyWindow={props.setCurrentReplyWindow}
                    setCurrentUpdateWindow={props.setCurrentUpdateWindow}
                    currentUpdateWindow={props.currentUpdateWindow}
                    deleteComment={props.deleteComment}
                    updateComment={props.updateComment}
                    updateScore={props.updateScore}
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