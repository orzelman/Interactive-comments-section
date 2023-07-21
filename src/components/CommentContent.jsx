import React, {useState} from "react";
import CommentTitle from "./CommentTitle";
import CommentText from "./CommentText";
import FooterMobile from "./FooterMobile";

export default function CommentContent(props) {
    const [updatedComment, setUpdatedComment] = useState(props.comment.content);
    console.log("mobileDesign = ", props.MobileDesign)
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
            isMobileDesign={props.isMobileDesign}
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
        {props.isMobileDesign?
        <FooterMobile
            comment={props.comment}
            currentUser={props.currentUser}
            setCurrentReplyWindow={props.setCurrentReplyWindow}
            setCurrentUpdateWindow={props.setCurrentUpdateWindow}
            deleteComment={props.deleteComment}
            updateScore={props.updateScore}
        />
        :
        ''
        }
    </div>) 
}  