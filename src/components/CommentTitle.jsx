import React from "react";
import IconButtons from "./Buttons/IconButtons";

export default function CommentTitle(props) {
    let isAuthor = false;
    if(props.currentUser.username === props.comment.user.username) {
        isAuthor = true;
    }
    else
        isAuthor = false;
    return(
        <div className="comment-title">
            <div className="comment-title-item">
                <img src={props.comment.user.image.png} alt="avatar"></img>
                <p className="current-user">{props.currentUser.username}</p>
                <p className="created-at">{props.comment.createdAt}</p>
            </div>
            <div className="comment-title-item">
                {(window.innerWidth > 765)? 
                <IconButtons author={isAuthor}/>
                :
                ''
                }
            </div>
            
        </div>
    )
}