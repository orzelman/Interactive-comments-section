import React from "react";
import ReplyButton from "./ReplyButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";


export default function IconButtons({author}) {
    return(
        <div className="reply-button">
            {author? 
            <>
                <DeleteButton />
                <EditButton />
            </> 
            :
            <ReplyButton /> }
            
        </div>
    )
}