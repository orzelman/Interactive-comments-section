import React from "react";

export default function CommentTitle(props) {
    return(
        <div className="comment-title">
            <img src={props.comment.user.image.png}></img>
            {/* <p className="current-user">{props.user.username}</p> */}
            <p className="created-at">{props.comment.createdAt}</p>
        </div>
    )
}