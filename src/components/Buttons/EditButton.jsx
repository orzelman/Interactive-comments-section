import React from "react";

export default function EditButton(props) {

    function handleClickUpdate() {
        console.log("clicked edit", props)
        props.setCurrentUpdateWindow(props.id)
    }
    return(
        <div className="icon-button" onClick={handleClickUpdate}>
            <img src="../images/icon-edit.svg"/>
            <span>Edit</span>
        </div>
    )
}