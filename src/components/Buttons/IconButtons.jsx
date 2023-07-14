import React, {useState} from "react";
import ReplyButton from "./ReplyButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import DeletePopup from "../DeletePopup";


export default function IconButtons(props) {
    const [isPopup, setIsPopup] = useState(false)

    return(
        <div className="reply-button">
            {isPopup && <DeletePopup comment={props.comment} setIsPopup={setIsPopup} deleteComment={props.deleteComment}/>}
            {props.author? 
            <>
                <DeleteButton setIsPopup={() => setIsPopup}/>
                <EditButton />
            </> 
            :
            <ReplyButton id={props.comment.id} setCurrentReplyWindow={props.setCurrentReplyWindow}/> }
        </div>
    )
}