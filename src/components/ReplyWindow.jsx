import React, { useState } from "react";

export default function ReplyWindow(props) {
    const [newText, setNewText] = useState("");

    function handleChange(event) {
        setNewText(event.target.value)
    }
    function handleAddComment() {
        props.addComment(newText, props.comment.id)
        setNewText("");
    }

    return(
    <div className="reply-window">
        <img className="avatar-reply" src={props.currentUser.image.png} />
        <textarea 
            onChange={handleChange}
            className="textarea-reply"
            value={newText}>
        </textarea>
        <div>
            <div onClick={handleAddComment} className="add-reply-button">REPLY</div>
        </div>
    </div>)
}