import React from "react";
import CommentContent from "./CommentContent";
import Counter from "./Counter";
import CommentFooter from "./CommentFooter";
import ReplyWindow from "./ReplyWindow";

export default function Comment(props) {
    if(!props.currentUser || !props.currentUser.username) {
        return null
    }
    else {
        return(
        <div className="comment">
            <CommentContent 
                comment={props.comment}
                currentUser={props.currentUser}
                setCurrentReplyWindow={props.setCurrentReplyWindow}
                setCurrentUpdateWindow={props.setCurrentUpdateWindow}
                currentUpdateWindow={props.currentUpdateWindow}
                deleteComment={props.deleteComment}
                updateComment={props.updateComment}
                isMobileDesign={props.isMobileDesign}
                updateScore={props.updateScore}
                />
            {!props.isMobileDesign?
                <Counter comment={props.comment} updateScore={props.updateScore}/>
            :
            ''
            }
            
        </div>)

    }

}




