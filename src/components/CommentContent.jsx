import React, {useState} from "react";
import CommentTitle from "./CommentTitle";
import CommentText from "./CommentText";
import ReplyButton from "./Buttons/ReplyButton";

export default function CommentContent(props) {
    const [updatedComment, setUpdatedComment] = useState(props.comment.content);
    function handleChangeComment(event) {
        setUpdatedComment(event.target.value)
    }
    function handleUpdateComment() {
        props.updateComment(props.comment.id, updatedComment);
    }

    return(<div className="comment-content">
        <CommentTitle 
            comment={props.comment}
            currentUser={props.currentUser}
            setCurrentReplyWindow={props.setCurrentReplyWindow}
            setCurrentUpdateWindow={props.setCurrentUpdateWindow}
            deleteComment={props.deleteComment}
            />
        {props.comment.id===props.currentUpdateWindow?
        <div style={{textAlign: "right"}}>
            <textarea 
                className="textarea-reply"
                placeholder={props.comment.content} 
                onChange={handleChangeComment}
                value={updatedComment}>
            </textarea>
            <div className="add-reply-button" onClick={handleUpdateComment}>UPDATE</div>
        </div>
        :
        <CommentText comment={props.comment} />
        }
        
    </div>)
}  