import React from "react";
import ReplyButton from "./ReplyButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";


export default function IconButtons(props) {
    return(
        <div className="reply-button">
            {props.author? 
            <>
                <DeleteButton />
                <EditButton />
            </> 
            :
            <ReplyButton id={props.id} setCurrentReplyWindow={props.setCurrentReplyWindow}/> }
        </div>
    )
}