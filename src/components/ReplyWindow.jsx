import React, { useState } from "react";

export default function ReplyWindow(props) {
    console.log("ReplyWindow = ",props.currentUser)
    return(
    <div className="reply-window">
        <img src={props.currentUser.image.png} />
        <textarea className="textarea-reply"></textarea>
        <div>REPLY</div>
    </div>)
}