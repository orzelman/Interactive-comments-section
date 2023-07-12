import React from "react";
import Comment from "./Comment";
import ReplyWindow from "./ReplyWindow";

export default function Reply(props) {
    return(
        <div className="reply">
            <div className="side-line"/>
            <Comment comment={props.comment} currentUser={props.currentUser}/>
            {props.comment.id===props.currentReplyWindow? 
                <ReplyWindow currentUser={props.currentUser} />
                :
                ""
            }
        </div>
    )
}