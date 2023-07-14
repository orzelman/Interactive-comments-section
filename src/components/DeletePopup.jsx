import React, {useState} from 'react'

export default function DeletePopup(props) {
    function handleClosePopup() {
        props.setIsPopup(false);
    }
    function handleConfirmDelete() {
        props.setIsPopup(false);
        props.deleteComment(props.comment.id)
    }

    return(<>
        <div className='grey-cover'/>
        <div className='popup'>
            <h3 style={{padding: "10px 0"}}>Delete comment?</h3>
            <p style={{padding: "10px 0"}}>Are you sure you want to delete this comment?
            This will remove the comment and can't be undone.
            </p>
            <div style={{ display: "flex", gap: "15px"}}>
                <div className='popup-button bgc-grey' onClick={handleClosePopup}>
                    NO, CANCEL
                </div>
                <div className='popup-button bgc-red' onClick={handleConfirmDelete}>
                    YES, DELETE
                </div>
            </div>
        </div>
    </>)
}