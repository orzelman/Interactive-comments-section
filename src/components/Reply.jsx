import React from "react";
import Comment from "./Comment";

export default function Reply(props) {
    return(
        <div className="reply">
            <div className="side-line"/>
            <Comment comment={props.comment} currentUser={props.currentUser}/>
        </div>
    )
}