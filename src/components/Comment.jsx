import React from "react";
import CommentContent from "./CommentContent";
import CommentFooter from "./CommentFooter";
import ReplyWindow from "./ReplyWindow";

export default function Comment(props) {
    console.log(props)
    if(!props.currentUser || !props.currentUser.username) {
        return null
    }
    else {
        console.log(props.currentUser.username)
        return(
        <div className="comment">
            <CommentContent 
                comment={props.comment}
                currentUser={props.currentUser}
                setCurrentReplyWindow={props.setCurrentReplyWindow}
                />
        </div>)

    }

}




