import React, {useState} from "react";

export default function ReplyButton(props) {
    function handleClicked() {
        props.setCurrentReplyWindow(props.id)
    }
    return(
        <div className="icon-button" onClick={handleClicked}>
            <img src="../images/icon-reply.svg"/>
            <span>Reply</span>
        </div>
    )
}